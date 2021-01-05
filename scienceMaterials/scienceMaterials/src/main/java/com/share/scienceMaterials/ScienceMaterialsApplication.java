package com.share.scienceMaterials;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.*;
import org.springframework.boot.autoconfigure.jdbc.*;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication (exclude = { SecurityAutoConfiguration.class })//(exclude = {DataSourceAutoConfiguration.class })
public class ScienceMaterialsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ScienceMaterialsApplication.class, args);
	}

}
