package com.itc.catastropher.data.service;

import java.util.List;
import java.util.Optional;

import com.itc.catastropher.data.model.Supporter;

public interface ISupporterService {
	List<Supporter> getAll();
	Optional<Supporter> getOne(String supporterDni);
	void add(Supporter newSupporter);
	void update(String supporterDni, Supporter changedSupporter);
	void delete(String supporterDni);
}