package com.share.scienceMaterials.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContactMessage {

	@Id
	@GeneratedValue
	private Long id;	
	private Date sendingDate;
	private String mail;
	private String message;
	private String name;
}
