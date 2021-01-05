package com.share.scienceMaterials.entities;

import java.util.Date;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.*;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Article {

	@Id
	@GeneratedValue
	private Long id;
	
	private String title;
	
	@Column(length=100000)
	private String summary;
	
	private Date creationDate;
	
	private Long usersId;
	
	@ManyToOne 
	private AppUser user;
		
	
	
	  @ElementCollection(targetClass = ArticleCategory.class)
	  @CollectionTable(name = "article_category",  joinColumns = @JoinColumn(name = "article_id"))
	  @Enumerated(EnumType.STRING)
	  @Column(name = "category")
	  private Set<ArticleCategory> categories;
}
