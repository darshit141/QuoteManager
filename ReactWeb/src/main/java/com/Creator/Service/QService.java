package com.Creator.Service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.Creator.Entity.Quotes;

public interface QService {

	
	List<Quotes> getquote();
	ResponseEntity<Quotes> postquote(Quotes quote);
	ResponseEntity<Quotes> updateQuote( long id,Quotes quote);
	 Quotes getquoteById( long id);
	 ResponseEntity<HttpStatus> DeleteQuote(long id);
}