package com.itc.catastropher.data.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity @Table(name = "user")
public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id String name;
	String password;
	
	public User() {}

	public User(String name, String password) {
		super();
		this.name = name;
		this.password = password;
	}

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public String getPassword() { return password; }
	public void setPassword(String password) { this.password = password; }	
}