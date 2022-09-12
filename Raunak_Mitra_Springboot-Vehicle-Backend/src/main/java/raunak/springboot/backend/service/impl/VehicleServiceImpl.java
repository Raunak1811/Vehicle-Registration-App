package raunak.springboot.backend.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import raunak.springboot.backend.entity.Vehicle;
import raunak.springboot.backend.exception.ResourceNotFoundException;
import raunak.springboot.backend.repository.VehicleRepository;
import raunak.springboot.backend.service.VehicleService;

@Component
public class VehicleServiceImpl implements VehicleService {

	@Autowired
	private VehicleRepository vehicleRepository;

	@Override
	public List<Vehicle> allVehicles() {
		return vehicleRepository.findAll();
	}

	@Override
	public Vehicle create_A_Vehicle(Vehicle vehicle) {
		return vehicleRepository.save(vehicle);
	}

	@Override
	public ResponseEntity<Vehicle> get_A_VehicleById(Long id) {

		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + id));
		return ResponseEntity.ok(vehicle);
	}

	@Override
	public ResponseEntity<Vehicle> update_A_Vehicle(Long id, Vehicle vehicleDetails) throws ResourceNotFoundException {

		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + id));

		vehicle.setRegNo(vehicleDetails.getRegNo());
		vehicle.setName(vehicleDetails.getName());
		vehicle.setType(vehicleDetails.getType());
		vehicle.setState(vehicleDetails.getState());
		vehicle.setCity(vehicleDetails.getCity());

		Vehicle updatedVehicle = vehicleRepository.save(vehicle);
		return ResponseEntity.ok(updatedVehicle);
	}

	@Override
	public ResponseEntity<Map<String, Boolean>> delete_A_Vehicle(Long id) throws ResourceNotFoundException {
		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle not exist with id :" + id));

		vehicleRepository.delete(vehicle);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
