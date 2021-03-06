package com.racheta.stockbd.repository;

import com.racheta.stockbd.model.Quote;
import com.racheta.stockbd.model.Quotes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuotesRepository extends JpaRepository<Quote, Integer> {
    List<Quote> findByUserName(String username);
    Quote findByUserNameAndQuote(String username, String quote);
}
