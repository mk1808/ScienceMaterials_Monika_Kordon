package com.share.scienceMaterials.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity


public class Text extends Part{

	@Column(length=100000)
	private String content;
}
