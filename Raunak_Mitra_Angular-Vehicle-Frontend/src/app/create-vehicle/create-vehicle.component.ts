import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();
  constructor(private vehicleService: VehicleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  state = ['West Bengal', 'Bihar', 'Odisha', 'Maharashtra', 'Delhi', 'Andhra Pradesh', 'Karnataka', 'Gujrat', 'Tamilnadu', 'Rajasthan'];

  city;
  newCity='-     enter      -';

  selectedState;
  cityWB = ['Kolkata', 'Bardwan', 'Darjeeling', 'Kalyani', 'Kharagpur', 'Howrah', 'Siliguri', 'Hooghly'];
  cityMH = ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Navi-Mumbai'];
  cityKT = ['Bangalore', 'Mysore', 'Mangalore', 'Udupi', 'Kolar'];
  cityDL = ['New Delhi', 'Firozabad', 'Siri', 'Mehrauli', 'Shergarh'];
  cityGJ = ['Surat', 'Baroda', 'Gandhinagar', 'Ahemdabad', 'Rajkot'];
  cityTN = ['Chennai', 'Coimbatore', 'Madurai', 'Vellore', 'Kanyakumari']
  cityOD = ['Bhubaneswer', 'Kalinga', 'Rourkella', 'Cuttack', 'Puri']
  cityAP = ['Hyderabad', 'Vizag', 'Guntur', 'Vijaywada', 'Nellore', 'Tirupati']
  cityBH = ['Patna', 'MuzzaffarPur', 'Bhagalpur', 'Gaya', 'Nalanda']
  cityRJ = ['Jaipur', 'Kota', 'Jaisalmer', 'Udaipur', 'Ajmer']
  defaultCityMessage = '-enter-';

  setCity() {
    if (this.selectedState == "Maharashtra") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityMH;
    }
    if (this.selectedState == "West Bengal") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityWB
    }
    if (this.selectedState == "Gujrat") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityGJ;
    }
    if (this.selectedState == "Tamilnadu") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityTN;
    }
    if (this.selectedState == "Delhi") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityDL;
    }
    if (this.selectedState == "Bihar") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityBH;
    }
    if (this.selectedState == "Odisha") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityOD;
    }
    if (this.selectedState == "Andhra Pradesh") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityAP;
    }
    if (this.selectedState == "Karnataka") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityKT
    }
    if (this.selectedState == "Rajasthan") {
      this.newCity = this.defaultCityMessage
      this.city = this.cityRJ
    }
  }

  saveVehicle() {
    this.vehicle.city = this.newCity;
    console.log("vechicle", this.vehicle.city)
    this.vehicleService.createVehicle(this.vehicle).subscribe(data => {
      this.goToVehicleList();
    },
      error => console.log(error));
  }

  goToVehicleList() {
    this.router.navigate(['/vehicles']);
  }

  onSubmit() {
    console.log(this.vehicle);
    this.saveVehicle();
    alert('The vehicle has been registered successfully');
  }
}
