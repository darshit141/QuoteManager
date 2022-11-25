package com.Creator.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Creator.Entity.Quotes;
import com.Creator.Service.QuoteService;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
public class QuotesController {
	@Autowired
	private QuoteService service;

	@GetMapping("/add")
	public List<Quotes> getquote() {
		return this.service.getquote();

	}

	@GetMapping("/add/{id}")
	public Quotes getquoteById(@PathVariable long id) {
		return this.service.getquoteById(id);
	}

	@PostMapping("/add")
	public ResponseEntity<Quotes> Postquote(@RequestBody Quotes quote) {

		return this.service.postquote(quote);
	}

	@PutMapping("/add/{id}")
	public ResponseEntity<Quotes> updateQuote(@PathVariable long id, @RequestBody Quotes quote) {

		return this.service.updateQuote(id,quote);
		 
//		 return ResponseEntity.ok().build();
	}

	@DeleteMapping("/add/{id}")
	public ResponseEntity<HttpStatus> deleteQuote(@PathVariable long id) {
	
		return this.service.DeleteQuote(id);
	}

}