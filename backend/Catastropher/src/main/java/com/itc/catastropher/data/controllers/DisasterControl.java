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
import com.itc.catastropher.data.service.IDisasterService;
import com.itc.catastropher.data.service.IHelpgroupService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class DisasterControl {
	
	@Autowired IDisasterService disasterService;
	@Autowired IHelpgroupService groupService;

	@GetMapping("/disaster")
	List<Disaster> getAll(){
		return disasterService.getAll(); }
	
	@GetMapping("/disaster/{id}")
	Disaster getOne(@PathVariable("id") long id) {
		Optional<Disaster> theDisaster = disasterService.getOne(id);
	
		if(theDisaster.isPresent()) {
			return theDisaster.get();
		}
		
		return null;
	}
	
	@PostMapping(value="/disaster")
	void add(Disaster newDisaster) {
		System.out.println(newDisaster.getTime());
		disasterService.add(newDisaster);
	}
	
	@PostMapping(value="/disaster", consumes="application/json")
	void addWithJson(@RequestBody String disasterData) {
		ObjectMapper mapeadorDatos = new ObjectMapper();
		try {
			Disaster newDisaster = mapeadorDatos.readValue(disasterData, Disaster.class);
			disasterService.add(newDisaster);
		} catch (JsonMappingException mappingError) { mappingError.printStackTrace();
		} catch (JsonProcessingException processingError) { processingError.printStackTrace(); }
	}

	@PutMapping("/disaster/{id}")
	void update(@PathVariable("id") int id, Disaster changedDisaster) {
		System.out.println();
		disasterService.update(id, changedDisaster);
	}
	
	@DeleteMapping("/disaster/{id}")
	void delete(@PathVariable("id") int id) {
		System.out.println();
		disasterService.delete(id);
	}	

	
	
	/*@PostMapping("/disasters/groups/{disasterId}/{groupId}")
	void addGroup(@PathVariable("disasterId") int disasterId, @PathVariable("groupId") int groupId) {
		Optional<Disaster> relateDisaster = disasterService.getOne(disasterId);
		Optional<Helpgroup> relateGroup = groupService.getOne(groupId);
		
		if (relateDisaster.isPresent() && relateGroup.isPresent()) {
			disasterService.addGroup(relateDisaster.get(), relateGroup.get());
		}
	}
	
	@DeleteMapping("/disasters/groups/{disasterId}/{groupId}")
	void removeGroupFromDisaster(@PathVariable("disasterId") int disasterId, @PathVariable("groupId") int groupId) {
		Optional<Disaster> relateDisaster = disasterService.getOne(disasterId);
		Optional<Helpgroup> relateGroup = groupService.getOne(groupId);
		
		if (relateDisaster.isPresent() && relateGroup.isPresent()) {
			disasterService.removeGroup(relateDisaster.get(), relateGroup.get());
		}
	}*/
	
	/*@DeleteMapping("/disasters/groups/{disasterId}")
	void removeAllDisasters(@)*/
	
	
}