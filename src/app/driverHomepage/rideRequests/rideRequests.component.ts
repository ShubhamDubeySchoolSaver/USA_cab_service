import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ride-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rideRequests.component.html',
  styleUrl: './rideRequests.component.css'
})
export class RideRequestsComponent {
  ridersRequest=3;
  requests=[{id: 0, name: 'Sarah',fare: 30}, {id: 1, name: 'Amy',fare: 30}, {id: 2, name: 'Rachel',fare: 30}, {id: 3, name: 'Jessica',fare: 30}, {id: 4, name: 'Poornima',fare: 30}];
  isEnabled=false;
  multiRides=false;
}
// scripts.ts


// // Define the structure of a ride request
// interface RideRequest {
//     title: string;
//     description: string;
// }

// // Function to fetch ride requests from the server
// async function fetchRideRequests(): Promise<RideRequest[]> {
//     try {
//         const response = await fetch('https://api.example.com/ride-requests'); // Replace with your API endpoint
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const rideRequests: RideRequest[] = await response.json();
//         return rideRequests;
//     } catch (error) {
//         console.error('Error fetching ride requests:', error);
//         return [];
//     }
// }

// // Function to create and display ride request boxes
// function displayRideRequests(rideRequests: RideRequest[]): void {
//     const container = document.getElementById('ride-requests-container');
//     if (!container) {
//         console.error('Container element not found');
//         return;
//     }

//     container.innerHTML = ''; // Clear any existing content

//     rideRequests.forEach(request => {
//         const requestBox = document.createElement('div');
//         requestBox.classList.add('ride-request-box');

//         const title = document.createElement('h3');
//         title.textContent = request.title;
//         requestBox.appendChild(title);

//         const description = document.createElement('p');
//         description.textContent = request.description;
//         requestBox.appendChild(description);

//         container.appendChild(requestBox);
//     });
// }

// // Fetch and display ride requests when the page loads
// document.addEventListener('DOMContentLoaded', async () => {
//     const rideRequests = await fetchRideRequests();
//     displayRideRequests(rideRequests);
// });
