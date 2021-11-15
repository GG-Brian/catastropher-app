package com.itc.catastropher.data.dao;

import org.springframework.data.repository.CrudRepository;
import com.itc.catastropher.data.model.Disaster;

public interface IDisasterDao extends CrudRepository<Disaster, Long>{
	
}