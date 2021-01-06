package com.share.scienceMaterials.controllers;

import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.share.scienceMaterials.dto.PartDto;
import com.share.scienceMaterials.entities.Article;
import com.share.scienceMaterials.entities.ArticleCategory;
import com.share.scienceMaterials.entities.Part;
import com.share.scienceMaterials.repositiories.ArticleRepository;
import com.share.scienceMaterials.services.ArticleService;


@RestController
@RequestMapping("/api/articles")
public class ArticleController {

	private ArticleService articleService;
		
	@Autowired
	public ArticleController(ArticleService articleService) {
		this.articleService=articleService;
	 }
	
	@GetMapping("/{id}")
	public ResponseEntity<Article> getArticleById(@RequestParam Long id) {
		return new ResponseEntity<>(articleService.getArticleById(id), HttpStatus.OK);
	}
	
	@GetMapping
	public ResponseEntity<List<Article>> getArticles() {
		System.out.println(new Date());
		return new ResponseEntity<>(articleService.getArticles(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Article> createArticle(@RequestBody Article article) {
		return new ResponseEntity<>(articleService.createArticle(article), HttpStatus.OK);
	}
	
	@GetMapping("parts/{id}")
	public ResponseEntity<List<Part>> getPartsForArticle(@PathVariable Long id) {
		
		return new ResponseEntity<>(articleService.getPartsByArticle(id),HttpStatus.OK);
	}
	
	@PostMapping("parts")
	public ResponseEntity<List<PartDto>> createParts(@RequestBody List<PartDto> parts) {
		articleService.createParts(parts);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("user/{id}")
	public ResponseEntity<List<Article>> getArticlesByUser(@PathVariable Long id) {
		
		return new ResponseEntity<>(articleService.getArticlesByUserId(id), HttpStatus.OK);
	}
	
	@GetMapping("categories")
	public ResponseEntity<Set<Article>> getArticlesByCategories(@RequestParam (value ="categories") Set<ArticleCategory> categories) {
		
		return new ResponseEntity<>(articleService.getArticlesByCategories(categories), HttpStatus.OK);
	}
	
	@GetMapping("title")
	public ResponseEntity<Set<Article>> getArticlesByTitle(@RequestParam (value ="title")String title) {
		
		return new ResponseEntity<>(articleService.getArticlesByTitlePart(title), HttpStatus.OK);
	}
	
	
	@GetMapping("titleCategory")
	public ResponseEntity<Set<Article>> getArticlesByTitleAndCategory(@RequestParam (value ="title")String title,
			@RequestParam (value ="categories")Set<ArticleCategory> categories) {
		
		return new ResponseEntity<>(articleService.getArticlesByTitlePartAndCategory(title, categories), HttpStatus.OK);
	}
	
}
