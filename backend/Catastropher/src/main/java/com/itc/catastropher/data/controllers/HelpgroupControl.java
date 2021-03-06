package com.itc.catastropher.data.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itc.catastropher.data.model.Disaster;
import com.itc.catastropher.data.model.Helpgroup;
import com.itc.catastropher.data.model.Helps;
import com.itc.catastropher.data.service.IDisasterService;
import com.itc.catastropher.data.service.IHelpgroupService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class HelpgroupControl {

	@Autowired IHelpgroupService groupService;
	@Autowired IDisasterService disasterService;
	
	@GetMapping("/group")
	List<Helpgroup> getAll(boolean order){
		return groupService.getAll(); }
	
	@GetMapping("/group/{id}")
	Helpgroup getOne(@PathVariable("id") long id) {
		Optional<Helpgroup> theGroup = groupService.getOne(id);
		
		if(theGroup.isPresent()) {
			return theGroup.get();
		}
		
		return null;
	}
	
	@PostMapping(value="/group")
	void add(Helpgroup newGroup) {
		System.out.println(newGroup.getTask());
		groupService.add(newGroup);
	}
	
	@PostMapping(value="/group", consumes="application/json")
	void addWithJson(@RequestBody String groupData) {
		ObjectMapper mapeadorDatos = new ObjectMapper();
		try {
			Helpgroup newGroup = mapeadorDatos.readValue(groupData, Helpgroup.class);
			groupService.add(newGroup);
		} catch (JsonMappingException mappingError) { mappingError.printStackTrace();			
		} catch (JsonProcessingException processingError) { processingError.printStackTrace(); }
	}

	@PutMapping("/group/{id}")
	void update(@PathVariable("id") int id, Helpgroup changedGroup) {
		System.out.println();
		groupService.update(id, changedGroup);
	}
	
	@DeleteMapping("/group/{id}")
	void delete(@PathVariable("id") int id) {
		System.out.println();
		groupService.delete(id);
	}
	
	
	
	
	@GetMapping("/disasters/groups/{order}")
	List<Helps> getAllRelations(@PathVariable("order") boolean order){
		return groupService.getAllRelations(order); }
	
	@GetMapping("/disasters/groups/{disasterId}/{groupId}")
	Helps getOneRelation(@PathVariable("disasterId") long disasterId, @PathVariable("groupId") long groupId) {
		Optional<Helps> theRelation = groupService.getOneRelation(disasterId, groupId);
		
		if(theRelation.isPresent()) {
			return theRelation.get();
		}
		
		return null;
	}
	
	
	@PostMapping("/disasters/groups/{disasterId}/{groupId}")
	void addRelation(@PathVariable("disasterId") long disasterId, @PathVariable("groupId") long groupId) {
		Optional<Disaster> relateDisaster = disasterService.getOne(disasterId);
		Optional<Helpgroup> relateGroup = groupService.getOne(groupId);
		
		if (relateGroup.isPresent() && relateDisaster.isPresent()){
			groupService.addRelation(relateGroup.get(), relateDisaster.get());
		}
	}
	
	@DeleteMapping("/disasters/groups/{disasterId}/{groupId}")
	void removeRelation(@PathVariable("disasterId") long disasterId, @PathVariable("groupId") long groupId) {
		Optional<Disaster> relateDisaster = disasterService.getOne(disasterId);
		Optional<Helpgroup> relateGroup = groupService.getOne(groupId);

		if (relateGroup.isPresent() && relateDisaster.isPresent()){
			groupService.removeRelation(relateGroup.get(), relateDisaster.get());
		}
	}
	
}