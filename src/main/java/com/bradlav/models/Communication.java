package com.bradlav.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "communication")
public class Communication extends AbstractEntity {
	
	private User fromUser;
	private User toUser;
	private ClimbSession climb;
	private Date messageCreated;

	
	
	public Communication(User fromUser, User toUser, ClimbSession climb, Date messageCreated) {
		super();
		this.fromUser = fromUser;
		this.toUser = toUser;
		this.climb = climb;
		this.messageCreated = messageCreated;
	}


	// No-arg Constructor
	public Communication() {}

	
	// GETTERS & SETTERS
	@NotNull
	@Column(name = "fromUser")
	public User getFromUser() {
		return fromUser;
	}


	public void setFromUser(User fromUser) {
		this.fromUser = fromUser;
	}

	@NotNull
	@Column(name = "toUser")
	public User getToUser() {
		return toUser;
	}


	public void setToUser(User toUser) {
		this.toUser = toUser;
	}


	public ClimbSession getClimb() {
		return climb;
	}

	public void setClimb(ClimbSession climb) {
		this.climb = climb;
	}

	@NotNull
	@Column(name = "messageCreated")
	public Date getMessageCreated() {
		return messageCreated;
	}


	public void setMessageCreated(Date messageCreated) {
		this.messageCreated = messageCreated;
	}

}





