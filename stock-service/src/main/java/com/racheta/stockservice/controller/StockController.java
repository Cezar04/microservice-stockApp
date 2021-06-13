package com.racheta.stockservice.controller;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import yahoofinance.Stock;
import yahoofinance.YahooFinance;
import yahoofinance.quotes.stock.StockQuote;


import java.io.IOException;
import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/rest/stock")
public class StockController {

    @Autowired
    RestTemplate restTemplate;

    @GetMapping("/{username}")
    public List<Quote> getStock(@PathVariable("username") final String userName) {

        ResponseEntity<List<String>> quoteResponse = restTemplate.exchange("http://db-service/rest/db/" + userName, HttpMethod.GET,
                null, new ParameterizedTypeReference<List<String>>() {
                });


        List<String> quotes = quoteResponse.getBody();
        return quotes
                .stream()
                .map(quote -> {
                    Stock stock = getStockPrice(quote);
                    return new Quote(quote, stock.getQuote().getPrice());
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/top10")
    public Map<String, BigDecimal> topTenQuotes(){
        List<String> quotesList = getTenQuotes();
        Map<String, BigDecimal> result = new HashMap<>();

        for(String item : quotesList){
            result.put(item, getStockPrice(item).getQuote().getPrice());
        }
        return result;
    }

    private Stock getStockPrice(String quote) {
        try {
            return YahooFinance.get(quote);
        } catch (IOException e) {
            e.printStackTrace();
            return new Stock(quote);
        }
    }



    @Data
    @AllArgsConstructor
    private class Quote {
        private String quote;
        private BigDecimal price;

    }

    private List<String> getTenQuotes(){
        return Arrays.asList("AAPL" , "AMD" ,"GE", "MVIS", "GSAT", "NIO", "SNAP", "TSLA", "SKLZ", "F");

    }

}