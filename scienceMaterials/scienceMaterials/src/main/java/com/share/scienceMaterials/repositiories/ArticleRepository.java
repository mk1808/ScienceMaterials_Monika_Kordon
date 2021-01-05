package com.share.scienceMaterials.repositiories;

import org.springframework.data.jpa.repository.JpaRepository;
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
}
