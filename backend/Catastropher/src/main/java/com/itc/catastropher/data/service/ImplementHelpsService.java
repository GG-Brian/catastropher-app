package com.itc.catastropher.data.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itc.catastropher.data.dao.IHelpsDao;
import com.itc.catastropher.data.model.Helps;

@Service
public class ImplementHelpsService implements IHelpsService {

	@Autowired IHelpsDao helps;
	
	@Override
	public List<Helps> getAllDisasters(){
		return (List<Helps>) helps.findAll();
	}

	@Override
	public List<Helps> getAllGroups() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Helps> getOneDisaster(long disasterId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Helps> getOneGroup(long groupId) {
		// TODO Auto-generated method stub
		return null;
	}
	
}