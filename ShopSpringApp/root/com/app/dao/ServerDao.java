package com.app.dao;

import org.apache.log4j.Logger;
import org.springframework.orm.hibernate5.HibernateTemplate;

import com.app.bean.Product;

public class ServerDao {

	private HibernateTemplate template;
	Logger log = Logger.getLogger(ServerDao.class);
	
	
	public HibernateTemplate getTemplate() {
		return template;
	}

	public void setTemplate(HibernateTemplate template) {
		this.template = template;
	}

	public void saveProductInDatabase(Product p) {
		log.info("saving in DB - "+p.getName());
		getTemplate().save(p);
		log.info(p.getName()+" saved in DB");
	}

	public void deleteProductFromDatabase(Product p) {
		log.info("deleting from DB - "+p.getName());
		getTemplate().delete(p);
		log.info(p.getName()+" deleted from DB");
	}

}
