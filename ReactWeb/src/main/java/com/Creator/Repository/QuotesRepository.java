package com.Creator.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Creator.Entity.Quotes;
@Repository
public interface QuotesRepository extends JpaRepository<Quotes, Long>{


}
