package com.itc.catastropher.data.service;

import java.util.List;
import java.util.Optional;

import com.itc.catastropher.data.model.Disaster;
import com.itc.catastropher.data.model.Helpgroup;

public interface IDisasterService {
	List<Disaster> getAll();
	Optional<Disaster> getOne(long disasterId);
	void add(Disaster newDisaster);
	void update(long disasterId, Disaster byeDisaster);
	void delete(long disasterId);
}