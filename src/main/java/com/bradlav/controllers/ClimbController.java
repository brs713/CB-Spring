package com.bradlav.controllers;

import java.util.Calendar;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bradlav.models.ClimbSession;
import com.bradlav.models.User;


// from blogz-spring.PostController.java
// public String singlePost(@PathVariable String username, @PathVariable int uid, Model model)
// @PathVariable String foo, @PathVariable String bar used for - "/loc/{foo}/{bar}"


@Controller
public class ClimbController extends AbstractController {
	
	static final int YEAR = 2016;
	static final int MINUTE = 60 * 1000;
	static final int HOUR = 60 * MINUTE;

	
 
	// NEWCLIMB
	@RequestMapping(value = "/newclimb", method = RequestMethod.GET)
    String newclimb(){

//		Date now = new Date();
// 		System.out.println("\n\nnow is " + now + "\n\n");
//		now is Thu Nov 17 14:14:09 CST 2016

		
        return "newclimb";
    }
	

	@RequestMapping(value = "/newclimb", method = RequestMethod.POST)
	String newclimb(HttpServletRequest request, Model model) {
		
		// errors
		String locError = "Invalid location.";
		//String locGuide = "";
		String whenError = "Invalid date.";
		//String[] whenGuide = {};
		//String durationError = "Invalid duration.";
		//String durationGuide = "";
		String empty = "cannot be empty";

		// get data
		String loc = request.getParameter("loc");
		String month = request.getParameter("month");
		String day = request.getParameter("day");
		String hour = request.getParameter("hour");
		String minute = request.getParameter("minute");
		String duration = request.getParameter("duration");

		
		// validate
		boolean hasError = false;

		if (loc == "") {
			System.out.println("\n\nEmpty String\n\n");
			model.addAttribute("locError", locError);
			hasError = true;
		}
		
		if (loc == "") {
			System.out.println("\n\null\n\n");
			model.addAttribute("locError", locError);
			hasError = true;
		}
		if (month == "") {
			model.addAttribute("monthError", empty);
			hasError = true;
		}
		if (day == "") {
			model.addAttribute("dayError", empty);
			hasError = true;
		}
		if (hour == "") {
			model.addAttribute("hourError", empty);
			hasError = true;
		}
		if (minute == "") {
			model.addAttribute("minuteError", empty);
			hasError = true;
		}

		//FAILS ON NON-NUMERIC VALUES, BUT THIS WILL ALL BE STRIPPED ANYWAY
		//JUST NEED A WAY TO GET DATA TO THE DB FOR NOW.
		
		if (month != "" && (Integer.parseInt(month) < 1 || Integer.parseInt(month) > 12)) {
			model.addAttribute("monthError", whenError);
			//model.addAttribute("whenGuide", whenGuide[0]);
			hasError = true;
		}		
		if (day != "" && (Integer.parseInt(day) < 1 || Integer.parseInt(day) > 31)) {
			model.addAttribute("dayError", whenError);
			//model.addAttribute("whenGuide", whenGuide[1]);
			hasError = true;
		}
		if (hour != "" && (Integer.parseInt(hour) < 0 || Integer.parseInt(hour) > 24)) {
			model.addAttribute("hourError", whenError);
			//model.addAttribute("whenGuide", whenGuide[2]);
			hasError = true;
		}
		if (minute != "" && (Integer.parseInt(minute) < 0 || Integer.parseInt(minute) > 60)) {
			model.addAttribute("minuteError", whenError);
			//model.addAttribute("whenGuide", whenGuide[3]);
			hasError = true;
		}
		

		// error path
		if (hasError) {
			
			// save user's data
			if (loc != "") {
				model.addAttribute("loc", loc);
			}
			if (month != "") {
				model.addAttribute("month", month);
			}
			if (day != "") {
				model.addAttribute("day", day);
			}
			if (hour != "") {
				model.addAttribute("hour", hour);
			}
			if (minute != "") {
				model.addAttribute("minute", minute);
			}
			if (duration != "") {
				model.addAttribute("duration", duration);
			}
			// retry
			return "newclimb";
		}
		
		
		// get this session's user
		HttpSession thisSession = request.getSession();
		User user = getUserFromSession(thisSession);
		
		// create a new object
		ClimbSession climb = new ClimbSession();
		
		// declare variables for new objects properties
 		String location = loc;
 		Date now = new Date();
 		Date startsWhen = now;
 		Date endsWhen = now;
 		
 		// process data to store values in new variables
 		Calendar c = Calendar.getInstance();
 		c.clear();
 		c.set(Calendar.MONTH, Integer.parseInt(month));
 		c.set(Calendar.YEAR, YEAR);
 		startsWhen = c.getTime();
 		
 		System.out.println("\n\nstartsWhen is " + startsWhen + "\n\n"); 		
 		
 		if (duration != null) {
 			long t= startsWhen.getTime();
 			endsWhen = new Date(t + (Long.parseLong(duration) * (long) MINUTE));
 			climb.setEndTime(endsWhen);
 		}
 		
 		// if not null, set variable in new object
 		climb.setUserInitiate(user);
 		climb.setLocation(location);
 		climb.setScheduledTime(startsWhen);

 		if (endsWhen != now) {
 	 		climb.setEndTime(endsWhen);			
		}
		
		// write the record to the db
		climbDao.save(climb);
		
		// redirect
		return "redirect:/";
		
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

/*
 
		// errors
		String nameError = "Invalid name.";
		String nameGuide = "name must be between 2 and 20 characters";

		// get data
		String name = request.getParameter("name");

		// validate
		boolean hasError = false;

		// error path
		if (hasError) {
			
			// save user's data
 			if ( != null) {
				model.addAttribute("", );
			}

			// retry
			return "";
		}
		
		
		// get this session's user
		HttpSession thisSession = request.getSession();
		User user = getUserFromSession(thisSession);
		
		// create a new object
		= new ();
		
		// declare variables for new objects properties
 		
 		
 		// process data to store values in new variables
 		
 		
 		// if not null, set variable in new object
 		if ( != "") {
			
		}
		
		// write the record to the db
		somethingDao.save(object);
		
		// redirect
		return "redirect:/";

*/