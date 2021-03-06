package com.itc.catastropher.data.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity @Table(name = "hgroup")
public class Helpgroup implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	String task;
	String place;
	Date creation;
		

	@ManyToMany
	@JoinTable(name = "help",
		joinColumns = @JoinColumn(name = "agroup"),
		inverseJoinColumns = @JoinColumn(name = "adisaster"))
	public Set<Disaster> disasters = new HashSet<>();
		
	
	@JsonIgnore
	@OneToMany(mappedBy = "helpgroup")
	public Set<Supporter> supporters;
	
	public Helpgroup() {}
	public Helpgroup(int id, String task, String place, Date creation) {
		super();
		this.id = id;
		this.task = task;
		this.place = place;
		this.creation = creation;
	}
	
	public long getId() { return id; }
	public void setId(long id) { this.id = id; }
	
	public String getTask() { return task; }
	public void setTask(String task) { this.task = task; }
	
	public String getPlace() { return place; }
	public void setPlace(String place) { this.place = place; }
	
	public Date getCreation() { return creation; }
	public void setCreation(Date creation) { this.creation = creation; }


	
	public Set<Disaster> getDisasters() { return disasters; }
	public void setDisasters(Set<Disaster> disasters) {	this.disasters = disasters; }
	
	public Set<Supporter> getSupporters() { return supporters; }
	public void setSupporters(Set<Supporter> supporters) {	this.supporters = supporters; }
}