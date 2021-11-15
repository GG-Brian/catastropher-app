package com.itc.catastropher.data.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity @Table(name = "disaster")
public class Disaster implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY) long id;
	String type;
	String origin;
	int area;
	long injured;
	long deceased;
	Timestamp time;
	
	
	@ManyToMany(mappedBy = "disasters")
	public Set<Helpgroup> groups = new HashSet<>();
	
	public Disaster() {}
	public Disaster(int id, String type, String origin, int area, long injured, long deceased, Timestamp time) {
		super();
		this.id = id;
		this.type = type;
		this.origin = origin;
		this.area = area;
		this.injured = injured;
		this.deceased = deceased;
		this.time = time;
	}
	
	public long getId() { return id; }
	public void setId(long id) { this.id = id; }

	public String getType() { return type; }
	public void setType(String type) { this.type = type; }
	
	public String getOrigin() { return origin; }
	public void setOrigin(String origin) { this.origin = origin; }
	
	public int getArea() { return area; }
	public void setArea(int area) { this.area = area; }
	
	public long getInjured() { return injured; }
	public void setInjured(long injured) { this.injured = injured; }
	
	public long getDeceased() { return deceased; }
	public void setDeceased(long deceased) { this.deceased = deceased; }
	
	public Timestamp getTime() { return time; }
	public void setTime(Timestamp time) { this.time = time; }		

}