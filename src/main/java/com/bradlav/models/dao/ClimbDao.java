package com.bradlav.models.dao;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bradlav.models.ClimbSession;
import com.bradlav.models.User;


@Transactional
@Repository
public interface ClimbDao extends CrudRepository<ClimbSession, Integer> {

	List<ClimbSession> findAll();
	List<ClimbSession> findAllByOrderByScheduledTimeAsc();
	
	ClimbSession findById(int id);
	ClimbSession findById(ClimbSession climb);
	
	List<ClimbSession> findByUserInitiate(User userInitiate);	
	List<ClimbSession> findByUserInitiate(int uid);
	
	List<ClimbSession> findByUserAcceptor(User userAcceptor);
	List<ClimbSession> findByUserAcceptor(int uid);
	
	List<ClimbSession> findByLocation(String location);
	
	List<ClimbSession> findByScheduledTime(Date scheduledTime);
	
/* Cut/Paste Template
 * 	List<ClimbSession> findBy();
 */ 
 
	
	

}
