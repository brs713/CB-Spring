package com.bradlav.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import com.bradlav.models.User;
import com.bradlav.models.dao.ClimbDao;
import com.bradlav.models.dao.CommunicationDao;
import com.bradlav.models.dao.ProfileDao;
import com.bradlav.models.dao.UserDao;



public abstract class AbstractController {

	@Autowired
    protected UserDao userDao;
	
	@Autowired
	protected ClimbDao climbDao;
	
	@Autowired
	protected CommunicationDao commDao;

	@Autowired
	protected ProfileDao profileDao;

	
    public static final String userSessionKey = "user_id";

    protected User getUserFromSession(HttpSession session) {
    	
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        return userId == null ? null : userDao.findById(userId);
    }
    
    protected void setUserInSession(HttpSession session, User user) {
    	session.setAttribute(userSessionKey, user.getId());
    }
	
}
