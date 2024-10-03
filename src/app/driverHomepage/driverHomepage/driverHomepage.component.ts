import { Component, OnInit } from '@angular/core';

import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { RideRequestsComponent } from '../rideRequests/rideRequests.component';


@Component({
  selector: 'app-driver-homepage',
  standalone: true,
  imports: [RideRequestsComponent,RouterOutlet,RouterLink,RouterLinkActive,GoogleMapsModule],
  templateUrl: './driverHomepage.component.html',
  styleUrl: './driverHomepage.component.css'
})
export class DriverHomepageComponent implements OnInit {


   map: google.maps.Map | undefined;
  markers: google.maps.Marker[] = [];

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    // Use HTML5 Geolocation to get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Initialize the map with user's location as the center
        this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: userLocation,
          zoom: 14
        });

        // Add marker for user's location
        this.addMarker(userLocation, 'Your Location');

        // Fetch driver locations (replace with your actual API call)
        this.fetchDrivers(userLocation);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  addMarker(position: google.maps.LatLngLiteral, title: string): void {
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      title,
      animation: google.maps.Animation.DROP
    });
    this.markers.push(marker);
  }

  fetchDrivers(userLocation: google.maps.LatLngLiteral): void {
    // Example driver locations (replace with your actual API response)
    const drivers = [
      { lat: userLocation.lat + 0.01, lng: userLocation.lng + 0.01, name: 'Driver 1' },
      { lat: userLocation.lat - 0.01, lng: userLocation.lng - 0.01, name: 'Driver 2' }
    ];

    drivers.forEach(driver => {
      this.addMarker({ lat: driver.lat, lng: driver.lng }, driver.name);
    });
  }

  showRideRequest=true;
  earnings=54.32;
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  zoom = 14;

}
