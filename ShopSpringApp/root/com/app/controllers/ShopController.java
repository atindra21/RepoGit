package com.app.controllers;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ShopController {
	
	Logger log = Logger.getLogger(ShopController.class);
	
	@RequestMapping("search")
	public void searchItems(@RequestParam("searchitem")String searchItem){
		
	}
}
