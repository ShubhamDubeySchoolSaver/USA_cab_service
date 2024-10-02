import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoDelCusHomPComponent } from './fo-del-cus-hom-p/fo-del-cus-hom-p.component';
import { DH_NavbarComponent } from './driver_homepage/navbar/navbar.component';
import { DriverHomepageComponent } from './driver_homepage/driver-homepage/driver-homepage.component';
import { EarningsComponent } from './driver_homepage/earnings/earnings.component';
import { RideRequestsComponent } from './driver_homepage/ride-requests/ride-requests.component';
import { SearchbarComponent } from './rider_page/searchbar/searchbar.component';
import { BookingsComponent } from './rider_page/bookings/bookings.component';
import { LoginPageComponent } from './restaurant/login-page/login-page.component';
import { RP_NavbarComponent } from './rider_page/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent, DH_NavbarComponent,FoDelCusHomPComponent,RP_NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

