package com.itc.catastropher.data.service;

import java.util.List;
import java.util.Optional;

import com.itc.catastropher.data.model.Disaster;
import com.itc.catastropher.data.model.Helpgroup;
import com.itc.catastropher.data.model.Helps;

public interface IHelpgroupService {
	List<Helpgroup> getAll();
	Optional<Helpgroup> getOne(long groupId);
	void add(Helpgroup group);
	void update(long groupId, Helpgroup changedGroup);
	void delete(long groupId);
	
	//List<Helps> getAllRelations();
	void addRelation(Helpgroup grupo, Disaster disaster);
	void removeRelation(Helpgroup grupo, Disaster disaster);
}