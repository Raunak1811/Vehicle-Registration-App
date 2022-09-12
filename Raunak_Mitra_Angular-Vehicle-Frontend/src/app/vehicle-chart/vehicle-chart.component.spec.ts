import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleChartComponent } from './vehicle-chart.component';

describe('VehicleChartComponent', () => {
  let component: VehicleChartComponent;
  let fixture: ComponentFixture<VehicleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
