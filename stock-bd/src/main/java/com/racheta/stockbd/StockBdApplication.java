package com.racheta.stockbd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class StockBdApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockBdApplication.class, args);
	}

}
