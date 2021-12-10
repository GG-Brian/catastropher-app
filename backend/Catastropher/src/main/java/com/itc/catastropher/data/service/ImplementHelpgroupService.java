package com.itc.catastropher.data.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itc.catastropher.data.dao.IHelpgroupDao;
import com.itc.catastropher.data.dao.IHelpsDao;
import com.itc.catastropher.data.model.Disaster;
import com.itc.catastropher.data.model.Helpgroup;
import com.itc.catastropher.data.model.Helps;
import com.itc.catastropher.data.model.HelpsPrimaryKeys;

@Service
public class ImplementHelpgroupService implements IHelpgroupService {

	@Autowired IHelpgroupDao groupDao;
	@Autowired IHelpsDao relationDao;
	@Autowired ImplementDisasterService disasterService;
	
	@Override
	public List<Helpgroup> getAll() {
		return (List<Helpgroup>) groupDao.findAll();
	}

	@Override
	public Optional<Helpgroup> getOne(long groupId) {
		return groupDao.findById(groupId);
	}

	@Override
	public void add(Helpgroup newGroup) {
		groupDao.save(newGroup);
	}

	@Override
	public void update(long groupId, Helpgroup changedGroup) {
		groupDao.findById(groupId).ifPresent((x) -> {
			changedGroup.setId(groupId);
			groupDao.save(changedGroup);
		});		
	}

	@Override
	public void delete(long groupId) {
		groupDao.deleteById(groupId);
	}
	
	

	@Override
	public void addRelation(Helpgroup relateGroup, Disaster relateDisaster) {
		System.out.println(relateGroup.disasters.add(relateDisaster));
		groupDao.save(relateGroup);
		
	}

	@Override
	public void removeRelation(Helpgroup relateGroup, Disaster relateDisaster) {
		System.out.println(relateGroup.disasters.remove(relateDisaster));
		groupDao.save(relateGroup);
	}

	@Override
	public List<Helps> getAllRelations(boolean order) {
		if (order) { return (List<Helps>) relationDao.findAllByOrderByGroupAsc(); }
		else { 		 return (List<Helps>) relationDao.findAll(); }
	}
	
	@Override
	public Optional<Helps> getOneRelation(long disasterId, long groupId) {
		Disaster disaster = disasterService.getOne(disasterId).get();
		Helpgroup group = this.getOne(groupId).get();
		
		return relationDao.findByDisasterAndGroup(disaster, group);
	}

}