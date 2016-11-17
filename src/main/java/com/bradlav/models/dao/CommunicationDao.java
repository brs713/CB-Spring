package com.bradlav.models.dao;

import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bradlav.models.ClimbSession;
import com.bradlav.models.Communication;
import com.bradlav.models.User;

@Transactional
@Repository
public interface CommunicationDao extends CrudRepository<Communication, Integer> {
	
	List<Communication> findAll();
	
	Communication findByFromUser(User fromUser);
	Communication findByFromUser(int fromUid);
	
	Communication findByToUser(User toUser);
	Communication findByToUser(int toUid);
	
	Communication findByClimb(ClimbSession climb);
	Communication findByClimb(int climbId);
	
	Communication findByMessageCreated(Date created);
	
}
