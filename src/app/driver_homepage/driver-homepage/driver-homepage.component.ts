import { Component } from '@angular/core';
import { RideRequestsComponent } from "../ride-requests/ride-requests.component";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-driver-homepage',
  standalone: true,
  imports: [RideRequestsComponent,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './driver-homepage.component.html',
  styleUrl: './driver-homepage.component.css'
})
export class DriverHomepageComponent {
  showRideRequest=true;
  earnings=54.32;
}
