package com.share.scienceMaterials.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.share.scienceMaterials.entities.Article;
import com.share.scienceMaterials.entities.ContactMessage;
import com.share.scienceMaterials.services.ContactMessageService;

@RestController
@RequestMapping("/api/messages")
public class ContactMessageController {
	private ContactMessageService contactMessageService;
	
	@Autowired
	public ContactMessageController(ContactMessageService contactMessageService) {
		this.contactMessageService = contactMessageService;
	}

	@PostMapping
	public ResponseEntity<ContactMessage> createArticle(@RequestBody ContactMessage message) {
		return new ResponseEntity<>(contactMessageService.createMessage(message), HttpStatus.OK);
	}
}
