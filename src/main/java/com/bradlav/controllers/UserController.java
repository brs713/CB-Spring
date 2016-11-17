package com.bradlav.controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bradlav.models.Profile;
import com.bradlav.models.RouteGrade;
import com.bradlav.models.User;


@Controller
public class UserController extends AbstractController {


	@RequestMapping(value = "/profile", method = RequestMethod.GET)
	String location(HttpServletRequest request, Model model){

		// get this session's user
		HttpSession thisSession = request.getSession();
		User user = getUserFromSession(thisSession);

		// find a profile for this user, if one exists
		Profile profile;
		if (profileDao.findByUser(user) != null) {
			profile = profileDao.findByUser(user);

			String name = profile.getName();

			String gym = profile.getHomeGym();
			int leadMin = profile.getLeadPracticeMin();
			int leadMax = profile.getLeadPracticeMax();
			int trMin = profile.getTopropePracticeMin();
			int trMax = profile.getTopropePracticeMax();
			int boulderMin = profile.getBoulderPracticeMin();
			int boulderMax = profile.getBoulderPracticeMax();

			model.addAttribute("name", name);
			model.addAttribute("gym", gym);
			model.addAttribute("leadMin", leadMin);
			model.addAttribute("leadMax", leadMax);
			model.addAttribute("trMin", trMin);
			model.addAttribute("trMax", trMax);
			model.addAttribute("boulderMin", boulderMin);
			model.addAttribute("boulderMax", boulderMax);
		}

		return "profile";
	}

	@RequestMapping(value = "/profile", method = RequestMethod.POST)
	String locations(HttpServletRequest request, Model model) {

		// errors
		String nameError = "Invalid name.";
		String nameGuide = "name must be between 2 and 20 characters";

		// get data
		String name = request.getParameter("name");
		String gym = request.getParameter("gym");
		String leadMin = request.getParameter("leadMin");
		String leadMax = request.getParameter("leadMax");	
		String trMin = request.getParameter("trMin");
		String trMax = request.getParameter("trMax");	
		String boulderMin = request.getParameter("boulderMin");
		String boulderMax = request.getParameter("boulderMax");
		System.out.println("name, gym, lead, tr, boulder are: " + name + "  " + gym + "  " + leadMin + "/" + leadMax + "  " + trMin + "/" + trMax + "  " + boulderMin + "/" + boulderMax);

		// validate
		boolean hasError = false;
		if (name != null && name.trim().length() < 2 || name.trim().length() > 20) {
			model.addAttribute("nameError", nameError);
			model.addAttribute("nameGuide", nameGuide);
			hasError = true;
		}


		// error path
		if (hasError) {

			// save user's data in the form in event of an error
			if (name != null) {
				model.addAttribute("name", name);
			}
			if (gym != null) {
				model.addAttribute("gym", gym);
			}
			if (leadMin != null) {
				model.addAttribute("leadMin", leadMin);
			}
			if (leadMax != null) {
				model.addAttribute("leadMax", leadMax);
			}
			if (trMin != null) {
				model.addAttribute("trMin", trMin);
			}
			if (trMax != null) {
				model.addAttribute("trMax", trMax);
			}
			if (boulderMin != null) {
				model.addAttribute("boulderMin", boulderMin);
			}
			if (boulderMax != null) {
				model.addAttribute("boulderMax", boulderMax);
			}

			// try again
			return "profile";
		}

		// get this session's user
		HttpSession thisSession = request.getSession();
		User user = getUserFromSession(thisSession);

		// find a profile for this user, if one exists
		Profile profile;
		if (profileDao.findByUser(user) != null) {
			profile = profileDao.findByUser(user);
		}
		else {
			profile = new Profile(user, name);			
		}

		// if not null, process data & set it in the profile
		int lMin, lMax, tMin, tMax, bMin, bMax;

		if (gym != "") {
			profile.setHomeGym(gym);
			System.out.println("gym " + gym);
		}
		if (leadMin != "") {
			lMin = new RouteGrade(leadMin.trim()).numberize();
			profile.setLeadPracticeMin(lMin);
			System.out.println("lMin = " + lMin);
		}
		if (leadMax != "") {
			lMax = new RouteGrade(leadMax.trim()).numberize();
			profile.setLeadPracticeMax(lMax);
			System.out.println(" = " + lMax);
		}
		if (trMin != "") {
			tMin = new RouteGrade(trMin.trim()).numberize();
			profile.setTopropePracticeMin(tMin);
			System.out.println("tMin = " + tMin + "  and trMin = " + trMin);
		}
		if (trMax != "") {
			tMax = new RouteGrade(trMax.trim()).numberize();
			profile.setTopropePracticeMax(tMax);
			System.out.println(" = " + tMax);
		}

		if (boulderMin != "") {
			bMin = new RouteGrade(boulderMin.trim()).numberize();
			profile.setBoulderPracticeMin(bMin);
			System.out.println("bMin = " + bMin);
		}
		if (boulderMax != "") {
			bMax = new RouteGrade(boulderMax.trim()).numberize();
			profile.setBoulderPracticeMax(bMax);
			System.out.println(" = " + bMax);
		}

		// write the record to the db
		//		Profile profile = new Profile(user, name, gymsAndCrags, lMin, lMax, tMin, tMax, bMin, bMax);
		profileDao.save(profile);


		// redirect
		return "redirect:/loc";  	

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
