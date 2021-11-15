package com.itc.catastropher.data.dao;

import org.springframework.data.repository.CrudRepository;
import com.itc.catastropher.data.model.Helpgroup;

public interface IHelpgroupDao extends CrudRepository<Helpgroup, Long> {
	
}