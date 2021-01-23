package com.share.scienceMaterials.repositiories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.share.scienceMaterials.entities.Part;
import com.share.scienceMaterials.entities.Article;

import java.util.List;

@Repository
public interface PartRepository extends JpaRepository<Part, Long>{
	List<Part> findByArticleOrderByOrderNo(Article article);
}
