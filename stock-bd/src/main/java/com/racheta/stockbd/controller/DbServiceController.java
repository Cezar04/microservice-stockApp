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


//    aici e ceva dubiosl

//    @PostMapping("/delete/{username}")
//    public List<String> delete(@PathVariable("username") final String username) {
//
//        List<Quote> quotes = quotesRepository.findByUserName(username);
//        quotesRepository.delete(quotes);
//
//        return getQuotesByUserName(username);
//    }


    private List<String> getQuotesByUserName(@PathVariable("username") String username) {
        return quotesRepository.findByUserName(username)
                .stream()
                .map(Quote::getQuote)
                .collect(Collectors.toList());
    }




}