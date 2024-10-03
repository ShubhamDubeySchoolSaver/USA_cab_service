import { Routes } from '@angular/router';
import { DriverHomepageComponent } from './driverHomepage/driverHomepage/driverHomepage.component';
import { DH_NavbarComponent } from './driverHomepage/DH_navBar/DH_navBar.component';
import { RideRequestsComponent } from './driverHomepage/rideRequests/rideRequests.component';
import { EarningsComponent } from './driverHomepage/earnings/earnings.component';
import { ProfileComponent } from './driverHomepage/profile/profile.component';


export const routes: Routes = [
  // { path: '', redirectTo: '/driver-homepage', pathMatch: 'full' },
  { path: 'driver-homepage', component: DriverHomepageComponent },
  { path: 'dh-navbar', component: DH_NavbarComponent },
  { path: 'dh/ride-requests', component: RideRequestsComponent },  
  { path: 'dh/earnings', component: EarningsComponent },
  { path: 'dh/profile', component: ProfileComponent },
  
];
