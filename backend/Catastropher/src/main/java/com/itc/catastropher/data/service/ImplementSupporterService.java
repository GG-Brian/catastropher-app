package com.itc.catastropher.data.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itc.catastropher.data.dao.ISupporterDao;
import com.itc.catastropher.data.model.Supporter;

@Service
public class ImplementSupporterService implements ISupporterService {

	@Autowired ISupporterDao supporterDao;
	
	@Override
	public List<Supporter> getAll() {
		return (List<Supporter>) supporterDao.findAll();
		//for (Supporter supporter: data) {
		//	supporter.getThegroup().getId();
		//}
	}

	@Override
	public Optional<Supporter> getOne(String supporterDni) {
		return supporterDao.findById(supporterDni);
	}

	@Override
	public void add(Supporter newSupporter) {
		supporterDao.save(newSupporter);
	}

	@Override
	public void update(String supporterDni, Supporter changedSupporter) {
		supporterDao.findById(supporterDni).ifPresent((x) -> {
			changedSupporter.setDni(supporterDni);
			supporterDao.save(changedSupporter);
		});
	}

	@Override
	public void delete(String supporterDni) {
		supporterDao.deleteById(supporterDni);		
	}

}