package com.app.controllers;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.app.dao.ShopDao;

@Controller
public class ShopController {
	
	Logger log = Logger.getLogger(ShopController.class);
	ShopDao dao;
	
	@RequestMapping("search")
	public void searchItems(@RequestParam("searchitem")String searchItem){
		dao.search("searchitem");
	}
}
