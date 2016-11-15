package com.bradlav.models;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "climbs")
public class ClimbSession extends AbstractEntity {
	
	private User userInitiate;
	private User userAcceptor;
	private String location;
	private Date scheduledTime;
	private boolean isAccepted;
	

	public ClimbSession(User userInitiate, User userAcceptor, String location, Date scheduledTime,
			boolean isAccepted) {
		super();
		this.userInitiate = userInitiate;
		this.userAcceptor = userAcceptor;
		this.location = location;
		this.scheduledTime = scheduledTime;
		this.isAccepted = false;
	}
	
	// No-arg Constructor
	public ClimbSession() {}
	
	
	// GETTERS & SETTERS
	@NotNull
	@Column(name = "userInitiate")
	public User getUserInitiate() {
		return userInitiate;
	}
	public void setUserInitiate(User userInitiate) {
		this.userInitiate = userInitiate;
	}
	
	@Column(name = "userAcceptor")
	public User getUserAcceptor() {
		return userAcceptor;
	}
	public void setUserAcceptor(User userAcceptor) {
		this.userAcceptor = userAcceptor;
	}
	
	@NotNull
	@Column(name = "location")
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	@NotNull
	@Column(name = "scheduledTime")
	public Date getScheduledTime() {
		return scheduledTime;
	}
	public void setScheduledTime(Date scheduledTime) {
		this.scheduledTime = scheduledTime;
	}
	
	@NotNull
	@Column(name = "isAccepted")
	public boolean isAccepted() {
		return isAccepted;
	}
	public void setAccepted(boolean isAccepted) {
		this.isAccepted = isAccepted;
	}

}





