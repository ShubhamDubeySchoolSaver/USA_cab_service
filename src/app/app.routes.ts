import { Routes } from '@angular/router';
import { DriverHomepageComponent } from './driver-homepage/driver-homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/driver-homepage', pathMatch: 'full' },
  { path: 'driver-homepage', component: DriverHomepageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'ride-requests', component: RideRequestsComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'profile', component: ProfileComponent },
  
];
