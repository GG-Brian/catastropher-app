package com.itc.catastropher.data.dao;

import org.springframework.data.repository.CrudRepository;

import com.itc.catastropher.data.model.UserApp;

public interface IUserDao extends CrudRepository<UserApp, Long> {
	public UserApp findUserByName(String name);
}