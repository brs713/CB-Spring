package com.bradlav.models.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bradlav.models.Profile;
import com.bradlav.models.User;

@Transactional
@Repository
public interface ProfileDao extends CrudRepository<Profile, Integer> {
	
	Profile findByUser(User user);
	List<Profile> findByName(String name);  //this searches just name, so it could return multiples.

	List<Profile> findAll();
	

/*  Future functionality:
  
	- finding partners by a certain skill level via methods like this:
 
	List<Profile> findByLeadPracticeMax(int level);
	
	
	- finding partners who go to the same gyms/crags
	code the model for finding a specific site within the gymsAndCrags String[]?
	then use this dao(?) to get a list of the users who go there?  (don't think this works here.)
*/	

}
