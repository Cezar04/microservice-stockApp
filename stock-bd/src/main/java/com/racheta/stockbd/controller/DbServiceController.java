package com.racheta.stockbd.controller;


import com.racheta.stockbd.model.Quote;
import com.racheta.stockbd.model.Quotes;
import com.racheta.stockbd.repository.QuotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/rest/db")
public class DbServiceController {
    @Autowired
    private QuotesRepository quotesRepository;


    @GetMapping("/{username}")
    public List<String> getQuotes(@PathVariable("username") final String username) {

        return getQuotesByUserName(username);
    }



    @PostMapping("/add")
    public List<String> add(@RequestBody final Quotes quotes) {

        quotes.getQuotes()
                .stream()
                .map(quote -> new Quote(quotes.getUserName(), quote))
                .forEach(quote -> quotesRepository.save(quote));
        return getQuotesByUserName(quotes.getUserName());
    }




    @PostMapping("/delete/{username}")
    public List<String> delete(@PathVariable("username") final String username) {

        List<Quote> quotes = quotesRepository.findByUserName(username);
        quotes.forEach(quote -> quotesRepository.delete(quote));

        return getQuotesFromList(quotes);
    }

    @PostMapping("/delete/{username}/{quote}")
    public String deleteQuoteByUsername(@PathVariable("username") final String username, @PathVariable("quote") final String quote){

        Quote quotes = quotesRepository.findByUserNameAndQuote(username, quote);
        quotesRepository.delete(quotes);
        return quotes.getQuote();
    }


    private List<String> getQuotesByUserName(@PathVariable("username") String username) {
        return quotesRepository.findByUserName(username)
                .stream()
                .map(Quote::getQuote)
                .collect(Collectors.toList());
    }


    private List<String> getQuotesFromList(List<Quote> quoteList){
        return quoteList
                .stream()
                .map(Quote::getQuote)
                .collect(Collectors.toList());
    }



}
