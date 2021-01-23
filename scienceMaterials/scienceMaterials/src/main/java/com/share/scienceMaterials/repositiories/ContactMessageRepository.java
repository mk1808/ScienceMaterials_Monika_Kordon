package com.share.scienceMaterials.repositiories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


import com.share.scienceMaterials.entities.ContactMessage;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long>{
	

}
