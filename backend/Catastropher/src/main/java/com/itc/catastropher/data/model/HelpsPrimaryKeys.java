package com.itc.catastropher.data.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class HelpsPrimaryKeys implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Column(name = "adisaster") int disasterId;
	@Column(name = "agroup") int hgroupId;
	
	
	public HelpsPrimaryKeys() {}
	public HelpsPrimaryKeys(int disasterId, int hgroupId) {
		super();
		this.disasterId = disasterId;
		this.hgroupId = hgroupId;
	}
	
	
	public int getDisasterId() { return disasterId; }
	public void setDisasterId(int disasterId) {	this.disasterId = disasterId; }
	
	public int getHgroupId() { return hgroupId; }
	public void setHgroupId(int hgroupId) {	this.hgroupId = hgroupId; }
	
	
	@Override public int hashCode() { return Objects.hash(disasterId, hgroupId); }
	
	@Override public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		HelpsPrimaryKeys other = (HelpsPrimaryKeys) obj;
		return disasterId == other.disasterId && hgroupId == other.hgroupId;
	}
}