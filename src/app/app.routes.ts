import { Routes } from '@angular/router';
import { DriverHomepageComponent } from './driver_homepage/driver-homepage/driver-homepage.component';
import { NavbarComponent } from './driver_homepage/navbar/navbar.component';
import { RideRequestsComponent } from './driver_homepage/ride-requests/ride-requests.component';
import { EarningsComponent } from './driver_homepage/earnings/earnings.component';
import { ProfileComponent } from './driver_homepage/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/driver-homepage', pathMatch: 'full' },
  { path: 'driver-homepage', component: DriverHomepageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'ride-requests', component: RideRequestsComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'profile', component: ProfileComponent },
  
];
