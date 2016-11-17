package com.bradlav.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class Service {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
//	public void updateProfile(User user, Profile profile) {
//		int id = user.getId();
//		Profile profileNew = this.jdbcTemplate.queryForObject(
//	        "select * from profile where id = " + id, new Object[] profileToBeUpdated
//	        
//	        
//	        //new Object[]{1212L}, String.class);  //Dunno what an Object[] with a (what is that?->) {1212L}, String.class is.
//	}
}
