package com.itc.catastropher.data.dao;

import org.springframework.data.repository.CrudRepository;
import com.itc.catastropher.data.model.Supporter;

public interface ISupporterDao extends CrudRepository<Supporter, String>{

}