package raunak.springboot.backend.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import raunak.springboot.backend.entity.Vehicle;
import raunak.springboot.backend.service.VehicleService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/vehicle_management/")
public class VehicleController {

	 @Autowired
	 VehicleService vs;
	
	
	
	// get all vehicles
	@GetMapping("/vehicles")
	public List<Vehicle> getAllVehicles(){
		return vs.allVehicles();
		
	}		
	
	// create vehicles rest api
	@PostMapping("/vehicles")
	public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
		return vs.create_A_Vehicle(vehicle);
	}
	
	// get vehicles by id rest api
	@GetMapping("/vehicles/{id}")
	public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
		return vs.get_A_VehicleById(id);
	}
	
	// update vehicles rest api
	
	@PutMapping("/vehicles/{id}")
	public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicleDetails){
	    return vs.update_A_Vehicle(id, vehicleDetails);
	}
	
	
	// delete vehicles rest api
	@DeleteMapping("/vehicles/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteVehicle(@PathVariable Long id){
		return vs.delete_A_Vehicle(id);
	}
	
	
}
