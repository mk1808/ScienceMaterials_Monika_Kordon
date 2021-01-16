package com.share.scienceMaterials;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication (exclude = { SecurityAutoConfiguration.class })//(exclude = {DataSourceAutoConfiguration.class })
@EnableWebMvc
public class ScienceMaterialsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScienceMaterialsApplication.class, args);
	}
	  @Bean
	    public BCryptPasswordEncoder bCryptPasswordEncoder() {
	        return new BCryptPasswordEncoder();
	    }

}
