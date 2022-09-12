import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleChartComponent } from './vehicle-chart/vehicle-chart.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path: 'vehicles', component: VehicleChartComponent},
  {path: 'create-vehicle', component: CreateVehicleComponent},
  {path: '', redirectTo: 'vehicles', pathMatch: 'full'},
  {path: 'update-vehicle/:id', component: UpdateVehicleComponent},
  {path: 'vehicle-details/:id', component: VehicleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
