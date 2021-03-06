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
import com.itc.catastropher.data.model.Supporter;
import com.itc.catastropher.data.service.ISupporterService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class SupporterControl {
	
	@Autowired ISupporterService supporterService;

	@GetMapping("/supporter")
	List<Supporter> getAll(){
		return supporterService.getAll();
	}
	
	@GetMapping("/supporter/{dni}")
	Supporter getOne(@PathVariable("dni") String dni) {
		Optional<Supporter> supporterData = supporterService.getOne(dni);
		
		if(supporterData.isPresent()) {
			return supporterData.get();
		}
		
		return null;
	}
	
	@PostMapping("/supporter")
	void add(Supporter newSupporter) {
		System.out.println(newSupporter.getName());
		supporterService.add(newSupporter);
	}
	
	@PostMapping(value="/supporter", consumes="application/json")
	void addWithJson(@RequestBody String supporterData) {
		ObjectMapper mapeadorDatos = new ObjectMapper();
		try {
			Supporter newSupporter = mapeadorDatos.readValue(supporterData, Supporter.class);
			supporterService.add(newSupporter);
		} catch (JsonMappingException mappingError) { mappingError.printStackTrace();
		} catch (JsonProcessingException processingError) { processingError.printStackTrace(); }
	}
	
	@PutMapping("/supporter/{dni}")
	void update(@PathVariable("dni") String dni, Supporter changedSupporter) {
		System.out.println();
		supporterService.update(dni, changedSupporter);
	}
	
	@DeleteMapping("/supporter/{dni}")
	void delete(@PathVariable("dni") String dni) {
		System.out.println();
		supporterService.delete(dni);
	}
}