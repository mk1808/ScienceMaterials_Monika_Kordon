package com.share.scienceMaterials.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.share.scienceMaterials.dto.PartDto;
import com.share.scienceMaterials.entities.File;
import com.share.scienceMaterials.entities.Header;
import com.share.scienceMaterials.entities.Link;
import com.share.scienceMaterials.entities.Picture;
import com.share.scienceMaterials.entities.Point;
import com.share.scienceMaterials.entities.Text;
import com.share.scienceMaterials.services.ArticleService;

@Service
public class PartConverter {
	
	

	// @Override
	   public File createFileFromDto(PartDto dto) {
	      File file = File.builder()
	    		  .fileOrderNo(dto.getFileOrderNo())
	    		  .extension(dto.getExtension())
	    		  .description(dto.getDescription())
	    		  .name(dto.getName())
	    		  .source(dto.getSource())
	    		  .build();
	      
	      file.setId(dto.getId());
	      file.setOrderNo(dto.getOrderNo());
	      file.setType("f");
	   
	      return file;
	   }
	   public PartDto createDtoFromFile( File file) {
		      PartDto dto= PartDto.builder()
		    		  .fileOrderNo(file.getFileOrderNo())
		    		  .extension(file.getExtension())
		    		  .description(file.getDescription())
		    		  .name(file.getName())
		    		  .source(file.getSource())
		    		  .build();
	
		      
		      dto.setId(file.getId());
		      dto.setOrderNo(file.getOrderNo());
		      dto.setArticleId(file.getArticle().getId());
		     return dto;
		   }
	   
	   
	 
	   public Header createHeaderFromDto(PartDto dto) {
		   Header header = Header.builder()
		    		  .size(dto.getSize())
		    		  .text(dto.getText())
		    		  .build();
	
		      
		   header.setId(dto.getId());
		   header.setOrderNo(dto.getOrderNo());
		   header.setType("h");
		      return header;
		   }

	   public PartDto createDtoFromHeader(Header header) {
		      PartDto dto= PartDto.builder()
		    		  .size(header.getSize())
		    		  .text(header.getText())
		    		  .build();
	
		      
		      dto.setId(header.getId());
		      dto.setOrderNo(header.getOrderNo());
		      dto.setArticleId(header.getArticle().getId());
		     return dto;
		   }
	   
	   public Link createLinkFromDto(PartDto dto) {
		   Link link = Link.builder() 
		    		  .description(dto.getDescription())
		    		  .source(dto.getSource())
		    		  .linkOrderNo(dto.getLinkOrderNo())
		    		  .text(dto.getText())
		    		  .build();
	
		      
		   link.setId(dto.getId());
		   link.setOrderNo(dto.getOrderNo());
		   link.setType("l");
		      return link;   
		   }
	   
	   public PartDto createDtoFromLink( Link link) {
		      PartDto dto= PartDto.builder()
		    		  .description(link.getDescription())
		    		  .source(link.getSource())
		    		  .linkOrderNo(link.getLinkOrderNo())
		    		  .text(link.getText())
		    		  .build();
	
		      
		      dto.setId(link.getId());
		      dto.setOrderNo(link.getOrderNo());
		      dto.setArticleId(link.getArticle().getId());
		     return dto;
		   }
	   
	   
	   public Picture createPictureFromDto(PartDto dto) {
		      Picture picture = Picture.builder()
		    	
		    		  .description(dto.getDescription())    	
		    		  .source(dto.getSource())
		    		  .pictureOrderNo(dto.getPictureOrderNo())
		    		  .build();
	
		      
		      picture.setId(dto.getId());
		      picture.setOrderNo(dto.getOrderNo());
		      picture.setType("pi");
		      return picture; 
		   }
	   
	   public PartDto createDtoFromPicture( Picture picture) {
		      PartDto dto= PartDto.builder()
		    		  .description(picture.getDescription())
		    		  .source(picture.getSource())
		    		  .pictureOrderNo(picture.getPictureOrderNo())
		    		  .build();
	
		      
		      dto.setId(picture.getId());
		      dto.setOrderNo(picture.getOrderNo());
		      dto.setArticleId(picture.getArticle().getId());
		     return dto;
		   }
	   
	   public Point createPointFromDto(PartDto dto) {
		   Point point = Point.builder()
		    		  .content(dto.getContent())
		    		  .build();
	
		      
		   point.setId(dto.getId());
		   point.setOrderNo(dto.getOrderNo());
		   point.setType("po");
		      return point;
		      
		      
		   }
	   
	   public PartDto createDtoFromPoint( Point point) {
		      PartDto dto= PartDto.builder()
		    		  .content(point.getContent())
		    		  .build();
	
		      
		      dto.setId(point.getId());
		      dto.setOrderNo(point.getOrderNo());
		      dto.setArticleId(point.getArticle().getId());
		     return dto;
		   }
	   
	   
	   public Text createTextFromDto(PartDto dto) {
		   Text text = Text.builder()
		    		  
		    		  .content(dto.getContent())
		    		  .build();
	
		      
		   text.setId(dto.getId());
		   text.setOrderNo(dto.getOrderNo());
		   text.setType("t");
		      return text;  
		   }
	   
	   public PartDto createDtoFromText( Text text) {
		      PartDto dto= PartDto.builder()
		    		  .content(text.getContent())
		    		  .build();
	
		      
		      dto.setId(text.getId());
		      dto.setOrderNo(text.getOrderNo());
		      dto.setArticleId(text.getArticle().getId());
		     return dto;
		   }
	   
	
	   
	
/* public Header createHeaderFromDto(PartDto dto) {
		      File file = File.builder()
		    		  .fileOrderNo(dto.getFileOrderNo())
		    		  .extension(dto.getExtension())
		    		  .description(dto.getDescription())
		    		  .name(dto.getName())
		    		  .source(dto.getSource())
		    		  .size(dto.getSize())
		    		  .linkOrderNo(dto.getLinkOrderNo())
		    		  .text(dto.getText())
		    		  .pictureOrderNo(dto.getPictureOrderNo())
		    		  .content(dto.getContent())
		    		  .build();
	
		      
		      file.setId(dto.getId());
		      file.setOrderNo(dto.getOrderNo());
		      file.setArticle(articleService.getArticleById(dto.getArticleId()));
		      return file;
		      
		      
		   }*/
}
