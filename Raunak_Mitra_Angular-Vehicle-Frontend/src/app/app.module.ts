import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleChartComponent } from './vehicle-chart/vehicle-chart.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { FormsModule} from '@angular/forms';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component'

@NgModule({
  declarations: [
    AppComponent,
    VehicleChartComponent,
    CreateVehicleComponent,
    UpdateVehicleComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
