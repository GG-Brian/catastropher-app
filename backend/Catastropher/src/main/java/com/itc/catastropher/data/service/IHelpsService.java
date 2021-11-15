package com.itc.catastropher.data.service;

import java.util.List;
import java.util.Optional;

import com.itc.catastropher.data.model.Helps;

public interface IHelpsService {
	
	List<Helps> getAllGroups();
	List<Helps> getAllDisasters();
	Optional<Helps> getOneDisaster(long disasterId);
	Optional<Helps> getOneGroup(long groupId);

}