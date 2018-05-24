package com.app.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

@Entity
@Table(name="Product")
public class Product {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String name;
	private double mrp;
	private double discount;
	private CommonsMultipartFile image;
	
	public int getId() {
		return id;
	}
	
	@Column(name="Name")
	public String getName() {
		return name;
	}
	
	@Column(name="MRP")
	public double getMrp() {
		return mrp;
	}
	
	@Column(name="Discount")
	public double getDiscount() {
		return discount;
	}
	
	@Column(name="Image")
	public CommonsMultipartFile getImage() {
		return image;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setMrp(double mrp) {
		this.mrp = mrp;
	}
	
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	
	public void setImage(CommonsMultipartFile image) {
		this.image = image;
	}
		 
}
