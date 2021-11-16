package com.itc.catastropher.data.model;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity @Table(name = "help")
public class Helps implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@EmbeddedId HelpsPrimaryKeys relation;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("disasterId")
	@JoinColumn(name = "adisaster")
	Disaster disaster;
	
	@JsonIgnore
	@ManyToOne
	@MapsId("hgroupId")
	@JoinColumn(name = "agroup")
	Helpgroup group;
	
	
	public Helps() {}
	public Helps(HelpsPrimaryKeys relation, Disaster disaster, Helpgroup group) {
		super();
		this.relation = relation;
		this.disaster = disaster;
		this.group = group;
	}
	
	
	public HelpsPrimaryKeys getRelation() { return relation; }
	public void setRelation(HelpsPrimaryKeys relation) { this.relation = relation; }

	public Disaster getDisaster() { return disaster; }
	public void setDisaster(Disaster disaster) { this.disaster = disaster; }

	public Helpgroup getGroup() { return group; }
	public void setGroup(Helpgroup group) { this.group = group; }
}