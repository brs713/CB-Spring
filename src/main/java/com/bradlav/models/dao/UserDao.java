package com.bradlav.models.dao;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.bradlav.models.User;


@Transactional
@Repository
public interface UserDao extends CrudRepository<User, Integer> {

	List<User> findAll();
	
	User findById(int id);
	User findById(User user);

	List<User> findbyId(List<User> users);
	List<User> findbyId(int[] userIds);
	
    User findByUsername(String username);
    User findByUsername(User user);
    
	List<User> findbyUsername(List<User> usernames);
	List<User> findbyUsername(String[] users);
    
}
