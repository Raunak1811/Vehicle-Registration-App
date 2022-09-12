import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {

  id: number;
  vehicle: Vehicle = new Vehicle();
  constructor(private vehicleService: VehicleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vehicleService.getVehicleById(this.id).subscribe(data => {
      console.log("Data", data)
      this.vehicle = data;
      this.oldcity = this.vehicle.city
    }, error => console.log(error));
  }
  state = ['West Bengal', 'Bihar', 'Odisha', 'Maharashtra', 'Delhi', 'Andhra Pradesh', 'Karnataka', 'Gujrat', 'Tamilnadu', 'Rajasthan'];
  city;
  oldcity = '';

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
  defaultCityMessage = '-update-';

  setCity() {
    if (this.selectedState == "Maharashtra") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityMH;
    }
    if (this.selectedState == "West Bengal") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityWB;
    }
    if (this.selectedState == "Gujrat") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityGJ;
    }
    if (this.selectedState == "Tamilnadu") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityTN;
    }
    if (this.selectedState == "Delhi") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityDL;
    }
    if (this.selectedState == "Bihar") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityBH;
    }
    if (this.selectedState == "Odisha") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityOD;
    }
    if (this.selectedState == "Andhra Pradesh") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityAP;
    }
    if (this.selectedState == "Karnataka") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityKT
    }
    if (this.selectedState == "Rajasthan") {
      this.oldcity = this.defaultCityMessage
      this.city = this.cityRJ
    }

  }


  onSubmit() {
    this.vehicle.city = this.oldcity
    this.vehicleService.updateVehicle(this.id, this.vehicle).subscribe(data => {
      this.goToVehicleList();
    }, error => console.log(error));
    alert('The vehicle has been Updated successfully !');
  }

  goToVehicleList() {
    this.router.navigate(['/vehicles']);
  }
}