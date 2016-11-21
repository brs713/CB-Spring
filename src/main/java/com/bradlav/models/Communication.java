package com.bradlav.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OrderColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "communication")
public class Communication extends AbstractEntity {
	
//	private final int messageId;
//	private static int serialNumber;
	private User fromUser;
	private User toUser;
	private ClimbSession climb;
	private Date messageCreated;  //I want this as final, but Hibernate doesn't like that.

	
	
	public Communication(User fromUser, User toUser, ClimbSession climb) {
		super();
//		incrementSerialNumber();
//		this.messageId = serialNumber;
		this.fromUser = fromUser;
		this.toUser = toUser;
		this.climb = climb;
		this.messageCreated = new Date();
	}


	// No-arg Constructor
	public Communication() {}

	
	// GETTERS & SETTERS

//	@Id
//	@NotNull
//	@GeneratedValue
//	@Column(name = "messageId", unique = true)
//	public int getMessageId() {
//		return messageId;
//	}
	
	
	@NotNull
	@ManyToOne
	//@Column(name = "fromUser")
	public User getFromUser() {
		return fromUser;
	}


	public void setFromUser(User fromUser) {
		this.fromUser = fromUser;
	}

	@NotNull
	@ManyToOne
	//@Column(name = "toUser")
	public User getToUser() {
		return toUser;
	}


	public void setToUser(User toUser) {
		this.toUser = toUser;
	}

	@NotNull
	@ManyToOne
	public ClimbSession getClimb() {
		return climb;
	}

	public void setClimb(ClimbSession climb) {
		this.climb = climb;
	}

	@NotNull
	@OrderColumn
	@Column(name = "messageCreated")
	public Date getMessageCreated() {
		return messageCreated;
	}


	public void setMessageCreated(Date messageCreated) {
		this.messageCreated = messageCreated;
	}

//	private static void incrementSerialNumber(){
//		serialNumber ++;
//	}
	
}





