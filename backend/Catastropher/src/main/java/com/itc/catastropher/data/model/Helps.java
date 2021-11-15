package com.itc.catastropher.data.model;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity @Table(name = "help")
public class Helps implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@EmbeddedId HelpsPrimaryKeys ids;
	
	@ManyToOne
	@MapsId("disasterId")
	@JoinColumn(name = "adisaster")
	Disaster disaster;
	
	@ManyToOne
	@MapsId("hgroupId")
	@JoinColumn(name = "agroup")
	Helpgroup group;
	
	
	public Helps() {}
	public Helps(HelpsPrimaryKeys ids, Disaster disaster, Helpgroup group) {
		super();
		this.ids = ids;
		this.disaster = disaster;
		this.group = group;
	}
	
	
	public HelpsPrimaryKeys getIds() { return ids; }
	public void setIds(HelpsPrimaryKeys ids) { this.ids = ids; }

	public Disaster getDisaster() { return disaster; }
	public void setDisaster(Disaster disaster) { this.disaster = disaster; }

	public Helpgroup getGroup() { return group; }
	public void setGroup(Helpgroup group) { this.group = group; }
}