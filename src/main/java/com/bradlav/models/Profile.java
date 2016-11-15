package com.bradlav.models;

import java.awt.Image;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "profile")
public class Profile {

	private User user;
	private String name; 
	private Image pic;
	private String[] gymsAndCrags;

	private int leadPracticeMin;
	private int leadPracticeMax;
	private int topropePracticeMin;
	private int topropePracticeMax;
	private int boulderPracticeMin;
	private int boulderPracticeMax;

	// CONSTRUCTORS
	public Profile(User user, String name, Image pic, String[] gymsAndCrags, int leadPracticeMin, int leadPracticeMax,
			int topropePracticeMin, int topropePracticeMax, int boulderPracticeMin, int boulderPracticeMax) {
		super();
		this.user = user;
		this.name = name;
		this.pic = pic;
		this.gymsAndCrags = gymsAndCrags;
		this.leadPracticeMin = leadPracticeMin;
		this.leadPracticeMax = leadPracticeMax;
		this.topropePracticeMin = topropePracticeMin;
		this.topropePracticeMax = topropePracticeMax;
		this.boulderPracticeMin = boulderPracticeMin;
		this.boulderPracticeMax = boulderPracticeMax;
	}

	// No-arg Constructor
	public Profile() {}

	
	// GETTERS & SETTERS
	@NotNull
	@Column(name = "user")
	public User getUser() {
		return user;
	}
	public void setName(User user) {
		this.user = user;
	}
	
	@NotNull
	@Column(name = "name")
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	//@Column(name = "pic")  *** how do you put an img in a db column?
	public Image getPic() {
		return pic;
	}
	public void setPic(Image pic) {
		this.pic = pic;
	}
	
	@Column(name = "gymsandcrags")
	public String[] getGymsAndCrags() {
		return gymsAndCrags;
	}
	public void setGymsAndCrags(String[] gymsAndCrags) {
		this.gymsAndCrags = gymsAndCrags;
	}
	
	@Column(name = "leadpracmin")
	public int getLeadPracticeMin() {
		return leadPracticeMin;
	}
	public void setLeadPracticeMin(int leadPracticeMin) {
		this.leadPracticeMin = leadPracticeMin;
	}
	
	@Column(name = "leadpracmax")
	public int getLeadPracticeMax() {
		return leadPracticeMax;
	}
	public void setLeadPracticeMax(int leadPracticeMax) {
		this.leadPracticeMax = leadPracticeMax;
	}
	
	@Column(name = "trpracmin")
	public int getTopropePracticeMin() {
		return topropePracticeMin;
	}
	public void setTopropePracticeMin(int topropePracticeMin) {
		this.topropePracticeMin = topropePracticeMin;
	}
	
	@Column(name = "trpracmax")
	public int getTopropePracticeMax() {
		return topropePracticeMax;
	}
	public void setTopropePracticeMax(int topropePracticeMax) {
		this.topropePracticeMax = topropePracticeMax;
	}
	
	@Column(name = "bldpracmin")
	public int getBoulderPracticeMin() {
		return boulderPracticeMin;
	}
	public void setBoulderPracticeMin(int boulderPracticeMin) {
		this.boulderPracticeMin = boulderPracticeMin;
	}
	
	@Column(name = "bldpracmax")
	public int getBoulderPracticeMax() {
		return boulderPracticeMax;
	}
	public void setBoulderPracticeMax(int boulderPracticeMax) {
		this.boulderPracticeMax = boulderPracticeMax;
	}



}

