package com.bradlav.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


// from blogz-spring.PostController.java
// public String singlePost(@PathVariable String username, @PathVariable int uid, Model model)
// @PathVariable String foo, @PathVariable String bar used for - "/loc/{foo}/{bar}"


@Controller
public class ClimbController {
 
	// LOC
	@RequestMapping(value = "/newclimb", method = RequestMethod.GET)
    String newclimb(){
        return "newclimb";
    }
	@RequestMapping(value = "/newclimb", method = RequestMethod.POST)
	String newclimb(HttpServletRequest request, Model model) {
        return "newclimb";
    }
	
	
	// LOC
	@RequestMapping(value = "/loc", method = RequestMethod.GET)
    String locations(){
        return "loc";
    }
	@RequestMapping(value = "/loc", method = RequestMethod.POST)
	String locations(HttpServletRequest request, Model model) {
        return "loc";
    }
	
	
	// CAL
	@RequestMapping(value = "/cal", method = RequestMethod.GET)
    String calendar(){
        return "cal";
    }
	@RequestMapping(value = "/cal", method = RequestMethod.POST)
	String calendar(HttpServletRequest request, Model model) {
        return "cal";
    }

	
	// PPL
	@RequestMapping(value = "/ppl", method = RequestMethod.GET)
    String people(){
        return "ppl";
    }
	@RequestMapping(value = "/ppl", method = RequestMethod.POST)
	String people(HttpServletRequest request, Model model) {
        return "ppl";
    }

	
	
}