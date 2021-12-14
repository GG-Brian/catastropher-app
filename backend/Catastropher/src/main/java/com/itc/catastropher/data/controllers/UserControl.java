package com.itc.catastropher.data.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.itc.catastropher.data.model.UserApp;
import com.itc.catastropher.data.service.IUserService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class UserControl {

//	@Autowired IUserService userService;
//	
//	@GetMapping("/user/{name}/{password}")
//	UserDetails loadUserByUsername(@PathVariable("name") String username) {
//		
//	}
/*	UserApp getOne(String name) {
		UserApp theUser = userService.getOne(name);
		
		if(theUser.getName() == null) {
			return theUser;
		}
		
		return null;
	}
*/	
}