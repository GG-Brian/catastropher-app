package com.itc.catastropher.data.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itc.catastropher.data.dao.IUserDao;
import com.itc.catastropher.data.model.UserApp;

@Service("ImplementUserService")
public class ImplementUserService implements UserDetailsService
//, IUserService 
{

	@Autowired IUserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		UserApp user = userDao.findUserByName(username);
		if (user == null) { throw new UsernameNotFoundException("User " + username + " was not found"); }
		
		// For permission managements (which my app doesn't have yet) - https://github.com/tcrurav/IonicToSpringAuthBasic/blob/master/spring-crud-restful-authbasic/PeopleWithAuthBasic/src/main/java/com/tiburcio/people/entity/services/JpaUserDetailsService.java
		/*
		List<GrantedAuthority> authorities = new ArrayList<>();
		for (Role role: user.getRoles()) { authorities.add(new SimpleGrantedAuthority(role.getRole())); }
		if (authorities.isEmpty()) { throw new UserNameNotFoundException("User " + username + " does not have any role"); }
		*/
		
		List<GrantedAuthority> authorities = new ArrayList<>();
		authorities.add(new SimpleGrantedAuthority("VISUALIZER"));
		
		return new User(user.getName(), user.getPassword(), true, true, true, true, authorities);
	}

//	@Override
//	public UserApp getOne(String name) {
//		return userDao.findUserByName(name);
//	}

	
	
}