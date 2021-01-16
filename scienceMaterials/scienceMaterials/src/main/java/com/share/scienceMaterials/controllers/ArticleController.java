package com.share.scienceMaterials.controllers;

import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.share.scienceMaterials.dto.PartDto;
import com.share.scienceMaterials.entities.Article;
import com.share.scienceMaterials.entities.ArticleCategory;
import com.share.scienceMaterials.entities.Part;
import com.share.scienceMaterials.repositiories.ArticleRepository;
import com.share.scienceMaterials.services.ArticleService;
import com.share.scienceMaterials.services.FileService;


@RestController
@RequestMapping("/api/articles")
public class ArticleController {

	private ArticleService articleService;
	private FileService fileService;	
	@Autowired
	public ArticleController(ArticleService articleService, FileService fileService) {
		this.articleService=articleService;
		this.fileService = fileService;
	 }
	
	@GetMapping("/{id}")
	public ResponseEntity<Article> getArticleById(@PathVariable Long id) {
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
	
	@PostMapping("files")
	public ResponseEntity<List<String>> createFiles(@RequestParam("files") List<MultipartFile> files) {
		
		return new ResponseEntity<>(fileService.saveFiles(files), HttpStatus.OK);
	}
	
	@GetMapping("files/{fileName}")
	public ResponseEntity<Resource> getFile(@PathVariable String fileName) {
		if (fileName != null && !fileName.isEmpty()) {
			Resource resource = fileService.getFile(fileName);
			String contentType = "application/octet-stream";
			return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType))
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
					.body(resource);
		} else {
			return ResponseEntity.notFound().build();
		}

	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Article> createParts(@PathVariable Long id, @RequestBody Article article) {
		
		return new ResponseEntity<>(articleService.editArticle(id, article), HttpStatus.OK);
	}
	
	@PutMapping("/parts/{id}")

	public ResponseEntity<Long> editParts(@PathVariable Long id, @RequestBody List<PartDto> parts) {
		
		return new ResponseEntity<>(articleService.editPartsFromArticle(id, parts), HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Long> deleteArticle(@PathVariable Long id) {
		return new ResponseEntity<>(articleService.deleteArticle(id), HttpStatus.OK);
	}
}
