package com.itc.catastropher.data.dao;

import org.springframework.data.repository.CrudRepository;

import com.itc.catastropher.data.model.User;

public interface IUserDao extends CrudRepository<User, Long> {
	public User findUserByUsername(String username);
}