package com.Creator.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Quotes {

	@Id
	private long id;
	private String title;
	private String quote;
	
	
	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getQuote() {
		return quote;
	}


	public void setQuote(String quote) {
		this.quote = quote;
	}


	public Quotes() {
		super();
	}


	@Override
	public String toString() {
		return "Quotes [id=" + id + ", title=" + title + ", quote=" + quote + "]";
	}
	
	
}
