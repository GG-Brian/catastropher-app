package com.itc.catastropher.data.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity @Table(name = "supporter")
public class Supporter implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id String dni;
	String name;
	int age;
	Date date;
	
	
	//@ManyToOne(fetch = FetchType.LAZY, optional = false)
	//@JoinColumn(name = "thegroup", referencedColumnName="id")
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "thegroup", referencedColumnName="id")
	Helpgroup helpgroup;
	
	
	public Supporter() {}
	public Supporter(String dni, String name, int age, Date date, Helpgroup thegroup) {
		super();
		this.dni = dni;
		this.name = name;
		this.age = age;
		this.date = date;
		this.helpgroup = thegroup;	
	}
	
	
	public String getDni() { return dni; }
	public void setDni(String dni) { this.dni = dni; }
	
	public String getName() { return name; }
	public void setName(String name) { this.name = name; }
	
	public int getAge() { return age; }
	public void setAge(int age) { this.age = age; }
	
	public Date getDate() { return date; }
	public void setDate(Date date) { this.date = date; }
	
		
	public Helpgroup getThegroup() { return helpgroup; }
	public void setThegroup(Helpgroup thegroup) { this.helpgroup = thegroup; }
}