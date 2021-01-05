package com.share.scienceMaterials.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;

import lombok.Data;


@Data
@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Part {

	@Id
	@GeneratedValue
	private Long id;
	
	private Long orderNo;
	
	@ManyToOne
	private Article article;
	
	private String type;
	
	private Long articlesId;

}
