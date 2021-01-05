package com.share.scienceMaterials.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.share.scienceMaterials.converter.PartConverter;
import com.share.scienceMaterials.dto.PartDto;
import com.share.scienceMaterials.entities.AppUser;
import com.share.scienceMaterials.entities.Article;
import com.share.scienceMaterials.entities.ArticleCategory;
import com.share.scienceMaterials.entities.File;
import com.share.scienceMaterials.entities.Header;
import com.share.scienceMaterials.entities.Link;
import com.share.scienceMaterials.entities.Part;
import com.share.scienceMaterials.entities.Picture;
import com.share.scienceMaterials.entities.Point;
import com.share.scienceMaterials.entities.Text;
import com.share.scienceMaterials.repositiories.ArticleRepository;
import com.share.scienceMaterials.repositiories.PartRepository;
import com.share.scienceMaterials.repositiories.UserRepository;
@Service
public class ArticleService {

private ArticleRepository articleRepository;
private PartRepository partRepository;
private PartConverter partConverter;
private UserService userService;
	
	@Autowired
	public ArticleService (ArticleRepository articleRepository, PartRepository partRepository, PartConverter partConverter, 
			 UserService userService) {
		this.articleRepository=articleRepository;
		this.partRepository =  partRepository;
		this.partConverter = partConverter;
		this.userService = userService;
	}
	
	public Article getArticleById(Long id) {
		return articleRepository.findById(id).orElse(null);
	}
	
	public List<Article> getArticles(){
		return articleRepository.findAll();
	}
	
	public Article createArticle(Article article) {
		article.setCreationDate(new Date());
		AppUser user = userService.getUserById(article.getUsersId());
		article.setUser(user);
		
		return articleRepository.save(article);
	}
	
	public void createParts(List<PartDto> parts){
		Article article = new Article();
		if(parts.size()>0) {
			article=getArticleById(parts.get(0).getArticleId());
		}
	
		for (PartDto part : parts) {
			switch (part.getType()) {
			case "f":
				File file = partConverter.createFileFromDto(part);
				file.setArticle(article);
				partRepository.save(file);

				break;
			case "h":
				Header header = partConverter.createHeaderFromDto(part);
				header.setArticle(article);
				partRepository.save(header);
				break;
			case "l":
				Link link = partConverter.createLinkFromDto(part);
				link.setArticle(article);
				partRepository.save(link);
				break;
			case "pi":
				Picture picture = partConverter.createPictureFromDto(part);
				picture.setArticle(article);
				partRepository.save(picture);
				break;
			case "po":
				Point point = partConverter.createPointFromDto(part);
				point.setArticle(article);
				partRepository.save(point);
				break;
			case "t":
				Text text = partConverter.createTextFromDto(part);
				
				text.setArticle(article);
				partRepository.save(text);
				break;
			}
			
			
		}
		
		
	}
	

	public List<Part> getPartsByArticle(Long articleId){
		List<Part> parts= partRepository.findByArticle(getArticleById(articleId));
		
		return parts;
	}
	
	public List<Article> getArticlesByUserId(Long userId){
		List<Article> articles = articleRepository.findArticlesByUser(userService.getUserById(userId));
		for(Article article:articles) {
			article.setUsersId(article.getUser().getId());
			article.setUser(null);
		}
		return articles;
	}
	

	public Set<Article> getArticlesByCategories(Set<ArticleCategory> categories){
		Set<Article> articles = articleRepository.getArticlesByCategoriesInOrderByCategories(categories);
		for(Article article:articles) {
			article.setUsersId(article.getUser().getId());
		}
		return articles;
	}
	
}

