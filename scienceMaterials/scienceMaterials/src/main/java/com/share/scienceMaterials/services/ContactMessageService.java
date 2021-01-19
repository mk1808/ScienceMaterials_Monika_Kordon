package com.share.scienceMaterials.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.share.scienceMaterials.converter.PartConverter;
import com.share.scienceMaterials.entities.AppUser;
import com.share.scienceMaterials.entities.Article;
import com.share.scienceMaterials.entities.ContactMessage;
import com.share.scienceMaterials.repositiories.ArticleRepository;
import com.share.scienceMaterials.repositiories.ContactMessageRepository;
import com.share.scienceMaterials.repositiories.PartRepository;

@Service
public class ContactMessageService {

	private ContactMessageRepository contactMessageRepository;
	@Autowired
	public ContactMessageService (ContactMessageRepository contactMessageRepository) {
		this.contactMessageRepository = contactMessageRepository;
	}
	
	public ContactMessage createMessage(ContactMessage message) {
		return contactMessageRepository.save(message);
	
	}
}
