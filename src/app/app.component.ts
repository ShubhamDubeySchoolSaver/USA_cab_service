import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoDelCusHomPComponent } from './fo-del-cus-hom-p/fo-del-cus-hom-p.component';
import { NavbarComponent } from './driver_homepage/navbar/navbar.component';
import { DriverHomepageComponent } from './driver_homepage/driver-homepage/driver-homepage.component';
import { EarningsComponent } from './driver_homepage/earnings/earnings.component';
import { RideRequestsComponent } from './driver_homepage/ride-requests/ride-requests.component';
import { DriverProfileUpdateComponent } from './driver-profile-update/driver-profile-update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,EarningsComponent,RideRequestsComponent,DriverHomepageComponent,FoDelCusHomPComponent,DriverProfileUpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'driver_homepage';
  city = 'chennai';
  details=[{
    id: 0,
    name: 'Sarah',
    fare: 30},
    {
      id: 1,
      name: 'sera',
      fare: 40
    }];
}

