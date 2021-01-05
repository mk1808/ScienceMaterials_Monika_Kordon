package com.share.scienceMaterials.entities;

import javax.persistence.Entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Entity
@Data
public class Picture extends Part{
	private String source;
	private String description;
	private Long pictureOrderNo;
}
