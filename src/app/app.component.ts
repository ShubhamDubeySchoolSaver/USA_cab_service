import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { EarningsComponent } from './earnings/earnings.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { DriverHomepageComponent } from './driver-homepage/driver-homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,EarningsComponent,RideRequestsComponent,DriverHomepageComponent],
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

