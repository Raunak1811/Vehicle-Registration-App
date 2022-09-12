package raunak.springboot.backend.service;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import raunak.springboot.backend.entity.Vehicle;

@Service
public interface VehicleService {
	public List<Vehicle> allVehicles();
	public Vehicle create_A_Vehicle(Vehicle vehicle);
	public ResponseEntity<Vehicle> get_A_VehicleById(Long id);
	public ResponseEntity<Vehicle> update_A_Vehicle(Long id,Vehicle vehicleDetails);
	public ResponseEntity<Map<String, Boolean>> delete_A_Vehicle(Long id);
	
	
}
