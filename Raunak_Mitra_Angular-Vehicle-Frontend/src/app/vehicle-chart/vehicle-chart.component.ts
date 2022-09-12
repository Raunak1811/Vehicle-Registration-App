import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle'
import { VehicleService } from '../vehicle.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle-chart',
  templateUrl: './vehicle-chart.component.html',
  styleUrls: ['./vehicle-chart.component.css']
})
export class VehicleChartComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  private getVehicles(){
    this.vehicleService.getVehiclesList().subscribe(data => {
      this.vehicles = data;
    });
  }

  vehicleDetails(id: number){
    this.router.navigate(['vehicle-details', id]);
  }

  updateVehicle(id: number){
    this.router.navigate(['update-vehicle', id]);
  }

  deleteVehicle(id: number){
    this.vehicleService.deleteVehicle(id).subscribe( data => {
      this.getVehicles();
    })
  }
}
