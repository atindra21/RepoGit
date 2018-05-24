package com.app.controllers;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.app.bean.Product;
import com.app.dao.ServerDao;

@Controller
public class ServerController {

	Logger log  = Logger.getLogger(ServerController.class);
	ServerDao dao;

	/*saves the product*/
	@RequestMapping(name="saveProduct",method=RequestMethod.POST)
	public void saveProduct(Product p) {
		log.info("saving the product "+ p.getName());
		dao.saveProductInDatabase(p);
		log.info(p.getName()+" saved");
	}
	
	/*deletes the product
	@RequestMapping(name="deleteProduct",method=RequestMethod.POST)
	public void deleteProduct(Product p) {
		log.info("deleting the product "+ p.getName());
		dao.deleteProductFromDatabase(p);
		log.info(p.getName()+" deleted");
	}*/
	
	//gets the data store page
	@RequestMapping(name="store",method=RequestMethod.GET)
	public ModelAndView dataStorePage(){
		ModelAndView mav = new ModelAndView();
		log.info("requesting the data storage page");
		mav.setViewName("store");
		return mav;
	}
}
