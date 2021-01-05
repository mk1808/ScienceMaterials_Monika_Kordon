package com.share.scienceMaterials.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.share.scienceMaterials.entities.AppUser;
import com.share.scienceMaterials.entities.Article;
import com.share.scienceMaterials.exceptions.ProblemWithLoginException;
import com.share.scienceMaterials.repositiories.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;
	
	@Autowired
	public UserService (UserRepository userRepository) {
		this.userRepository=userRepository;
	}
	
	public AppUser getUserByMail(String mail) {
		return userRepository.findUserByMail(mail);
	}
	public AppUser getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public AppUser createUser(AppUser user) {
		
		return userRepository.save(user);
	}
	
	public AppUser loginUser(AppUser loggingUser) {
		AppUser user=  userRepository.findUserByMail(loggingUser.getMail());
		if(user !=null ) {
			if (user.getPassword().equals(loggingUser.getPassword())) {
				return user;
			}
			else {
				throw new ProblemWithLoginException("Złe hasło");
			}
		} 
		else {
			throw new ProblemWithLoginException("Brak użytkownika");
		}
	}
}
