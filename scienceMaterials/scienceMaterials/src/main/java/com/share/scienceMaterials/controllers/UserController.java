package com.share.scienceMaterials.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.share.scienceMaterials.dto.PartDto;
import com.share.scienceMaterials.entities.AppUser;
import com.share.scienceMaterials.entities.Part;
import com.share.scienceMaterials.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	private UserService userService;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService=userService;
	}
	
	@GetMapping("/{mail}")
	public ResponseEntity<AppUser> getUserByMail(@PathVariable String mail) {
		
		return new ResponseEntity<>(userService.getUserByMail(mail),HttpStatus.OK);
	}
	
	
	@PostMapping
	public ResponseEntity<AppUser> createUser(@RequestBody AppUser user) {
		userService.createUser(user);
		return new ResponseEntity<>(userService.createUser(user),HttpStatus.OK);
	}
	
	@PostMapping("/verify")
	public ResponseEntity<AppUser> loginUser(@RequestBody AppUser user) {
	
		return new ResponseEntity<>(userService.loginUser(user),HttpStatus.OK);
	}
	
	
	
}
