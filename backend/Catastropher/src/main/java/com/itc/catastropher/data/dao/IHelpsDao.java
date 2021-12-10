package com.itc.catastropher.data.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.itc.catastropher.data.model.Disaster;
import com.itc.catastropher.data.model.Helpgroup;
import com.itc.catastropher.data.model.Helps;
import com.itc.catastropher.data.model.HelpsPrimaryKeys;

public interface IHelpsDao extends CrudRepository<Helps, HelpsPrimaryKeys> {
	
	//@Query("SELECT ids FROM Helps ids WHERE adisaster(ids.disaster), agroup(ids.group)")
	Optional<Helps> findByDisasterAndGroup(Disaster disaster, Helpgroup group);
	
	List<Helps> findAllByOrderByGroupAsc();
}