package com.share.scienceMaterials.repositiories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.share.scienceMaterials.entities.AppUser;

@Repository
public interface UserRepository extends JpaRepository<AppUser, Long> {

	public AppUser findUserByMail(String mail);
}
