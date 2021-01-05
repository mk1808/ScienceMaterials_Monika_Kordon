package com.share.scienceMaterials.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import lombok.Builder;
import lombok.Data;

@Builder
@Entity
@Data
public class Header extends Part{
	 
	private Long size;
	private String text;
}
