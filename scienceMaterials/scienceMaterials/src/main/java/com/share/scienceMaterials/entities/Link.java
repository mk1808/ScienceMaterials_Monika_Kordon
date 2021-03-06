package com.share.scienceMaterials.entities;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Link extends Part{
	private String source;
	private String description;
	private Long linkOrderNo;
	private String text;

}
