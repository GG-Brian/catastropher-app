package com.itc.catastropher.data.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itc.catastropher.data.dao.IDisasterDao;
import com.itc.catastropher.data.model.Disaster;
import com.itc.catastropher.data.model.Helpgroup;

@Service
public class ImplementDisasterService implements IDisasterService {

	@Autowired IDisasterDao disasterDao;
	
	@Override
	public List<Disaster> getAll() {
		return (List<Disaster>) disasterDao.findAll();
	}

	@Override
	public Optional<Disaster> getOne(long disasterId) {
		return disasterDao.findById(disasterId);
	}

	@Override
	public void add(Disaster newDisaster) {
		disasterDao.save(newDisaster);
	}

	@Override
	public void update(long disasterId, Disaster changedDisaster) {
		disasterDao.findById(disasterId).ifPresent((x) -> {
			changedDisaster.setId(disasterId);
			disasterDao.save(changedDisaster);
		});
	}

	@Override
	public void delete(long disasterId) {
		disasterDao.deleteById(disasterId);
	}

	/*@Override
	public void addGroup(Disaster relateDisaster, Helpgroup relateGroup) {
		System.out.println(relateDisaster.groups.add(relateGroup));
		disasterDao.save(relateDisaster);
	}*/

	/*@Override
	public void removeGroup(Disaster relateDisaster, Helpgroup relateGroup) {
		relateDisaster.groups.remove(relateGroup);
		
		
	}*/



}