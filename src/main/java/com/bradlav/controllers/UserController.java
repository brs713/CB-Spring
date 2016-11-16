package com.bradlav.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class UserController {

	@RequestMapping(value = "/profile", method = RequestMethod.GET)
    String locations(){
        return "profile";
    }
	@RequestMapping(value = "/profile", method = RequestMethod.POST)
	String locations(HttpServletRequest request, Model model) {
        return "profile";
    }

	
	@RequestMapping(value = "/communication", method = RequestMethod.GET)
    String communication(){
        return "communication";
    }
	@RequestMapping(value = "/communication", method = RequestMethod.POST)
	String communication(HttpServletRequest request, Model model) {
        return "communication";
    }
	
	
}
