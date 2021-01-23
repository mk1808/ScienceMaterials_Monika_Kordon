package com.share.scienceMaterials.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.share.scienceMaterials.entities.Article;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PartDto {

	private Long id;
	
	private Long orderNo;
	
	private Long articleId;
	
	private String type;
	
	private String source;
	private String description;
	private Long fileOrderNo;
	private String extension;
	private String name;
	private Long size;
	private Long linkOrderNo;
	private String text;
	private Long pictureOrderNo;
	private String content;
}
