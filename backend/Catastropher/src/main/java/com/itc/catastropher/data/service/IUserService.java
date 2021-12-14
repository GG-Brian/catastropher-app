package com.itc.catastropher.data.service;

import java.util.Optional;

import com.itc.catastropher.data.model.UserApp;

public interface IUserService {
	UserApp getOne(String name);
}
