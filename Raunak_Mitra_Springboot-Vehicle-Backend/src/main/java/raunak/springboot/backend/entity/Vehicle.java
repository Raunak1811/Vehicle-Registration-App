package raunak.springboot.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Vehicle")
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String regNo;
	private String name;
	private String type;
	private String state;
	private String city;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	
	public String getRegNo() {
		return regNo;
	}
	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}
	
	public Vehicle(long id, String regNo, String name, String type, String state, String city) {
		super();
		this.id = id;
		this.regNo = regNo;
		this.name = name;
		this.type = type;
		this.state = state;
		this.city = city;
	}
	public Vehicle() {
		super();
		
	}
	@Override
	public String toString() {
		return "Vehicle [id=" + id + ", regNo=" + regNo + ", name=" + name + ", type=" + type + ", state=" + state
				+ ", city=" + city + "]";
	}

	
	
}