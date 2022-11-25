package com.Creator.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Creator.Entity.Quotes;
import com.Creator.Repository.QuotesRepository;

@Service
public class QuoteService implements QService {
	@Autowired
	private QuotesRepository repo;

	@Override
	public List<Quotes> getquote() {

		return (List<Quotes>) repo.findAll();

	}

	@Override

	public Quotes getquoteById( long id) {
		List<Quotes> list =getquote() ;
		Quotes q = null;
		for (Quotes quote : list) {
			if(quote.getId()==id)
			{
				q=quote;
				break;
			}
		}
			return q;
		
		
		 
	
	}

	@Override
	public ResponseEntity<Quotes> postquote(Quotes quote) {
		repo.save(quote);
		return quote;
	}

	@Override
	public ResponseEntity<HttpStatus> DeleteQuote( long id) {
		repo.getReferenceById(id);
		repo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@Override
	public ResponseEntity<Quotes> updateQuote( long id,  Quotes quote) {
		quote = repo.getReferenceById(id);

		quote.setTitle(quote.getTitle());
		quote.setQuote(quote.getQuote());

		repo.save(quote);

		return ResponseEntity.ok(quote);
	}

}
