package com.share.scienceMaterials.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Entity
@Data
public class Point extends Part{
	@Column(length=100000)
	private String content;
}
