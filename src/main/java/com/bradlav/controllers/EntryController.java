package com.bradlav.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EntryController extends AbstractController{
	
	@RequestMapping(value = "/")
	public String index(Model model){
		return "splash";
	}
	
	// For now, that's all this is.
	/* FutureFeature - store something to remember user (cookies on their device or device addresses in this db)
	 * 		- redirect upon login
	 */
	

}
