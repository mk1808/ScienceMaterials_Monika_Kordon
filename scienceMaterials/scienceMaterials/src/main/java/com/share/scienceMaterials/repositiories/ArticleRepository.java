package com.share.scienceMaterials.repositiories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.share.scienceMaterials.entities.Article;
import com.share.scienceMaterials.entities.ArticleCategory;
import com.share.scienceMaterials.entities.AppUser;


import java.util.List;
import java.util.Set;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long>{

	public List<Article> findArticlesByUser(AppUser user);
	Set<Article> getArticlesByCategoriesInOrderByCategories(Set<ArticleCategory> categories);
	@Query("SELECT a FROM Article a WHERE a.title LIKE CONCAT(:title,'%')")
	Set<Article> getArticlesByTitlePart(String title);	
	
	
	//@Query("SELECT a FROM Article a, ArticleCategory c WHERE a.id=c.article_id AND a.title LIKE CONCAT(:title,'%') AND c.category IN :categories")
	//Set<Article> getArticlesByTitlePartAndCategories(String title, List<ArticleCategory> categories);	
}
