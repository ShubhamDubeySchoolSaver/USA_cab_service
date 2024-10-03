import { Routes } from '@angular/router';
import { DriverHomepageComponent } from './driver_homepage/driver-homepage/driver-homepage.component';
import { DH_NavbarComponent } from './driver_homepage/navbar/navbar.component';
import { RideRequestsComponent } from './driver_homepage/ride-requests/ride-requests.component';
import { EarningsComponent } from './driver_homepage/earnings/earnings.component';
import { ProfileComponent } from './driver_homepage/profile/profile.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/driver-homepage', pathMatch: 'full' },
  { path: 'driver-homepage', component: DriverHomepageComponent },
  { path: 'dh-navbar', component: DH_NavbarComponent },
  { path: 'dh/ride-requests', component: RideRequestsComponent },
  { path: 'dh/earnings', component: EarningsComponent },
  { path: 'dh/profile', component: ProfileComponent },
  
];
