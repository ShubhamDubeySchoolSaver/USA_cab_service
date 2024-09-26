// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-bookings',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './bookings.component.html',
//   styleUrls: ['./bookings.component.css']
// })
// export class BookingsComponent {
//   rides = [
//     {
//       category: 'Auto',
//       driver: 'John Doe',
//       rating: 4.5,
//       vehicle: 'Auto',
//       fare: '$10'
//     },
//     {
//       category: 'Taxi',
//       driver: 'Jane Smith',
//       rating: 4.7,
//       vehicle: 'Sedan',
//       fare: '$15'
//     },
//     {
//       category: 'Bike',
//       driver: 'Alex Johnson',
//       rating: 4.3,
//       vehicle: 'Bike',
//       fare: '$8'
//     }
//   ];
// }

// -------------------------------------------------------
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';  // Import FormsModule
// import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
// @Component({
//   selector: 'app-bookings',
//   standalone: true,
//   imports: [CommonModule, FormsModule,RouterOutlet,RouterLink,RouterLinkActive],  // Add FormsModule here
//   templateUrl: './bookings.component.html',
//   styleUrls: ['./bookings.component.css']
// })
// export class BookingsComponent {
//   pickupLocation: string = '';   // Add variable for pickup location
//   dropoffLocation: string = '';  // Add variable for drop-off location


//   searchRides() {
//     console.log('Pickup Location:', this.pickupLocation);
//     console.log('Drop-off Location:', this.dropoffLocation);

//   }
// }



// import { Component, OnInit } from '@angular/core';
// import { LocationService } from '../../services/location.service'; // Adjust the path based on the file structure
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';  // Import FormsModule
//  import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
// @Component({
//   selector: 'app-bookings',
//   standalone: true,
//   imports: [CommonModule, FormsModule,RouterOutlet,RouterLink,RouterLinkActive],  // Add FormsModule here
//   templateUrl: './bookings.component.html',
//   styleUrls: ['./bookings.component.css']
// })
// export class BookingsComponent implements OnInit {
//   pickupLocation: string = ''; // Define the property
//   dropoffLocation: string = ''; // Define the property

//   constructor(private locationService: LocationService) {}

//   ngOnInit(): void {
//     this.getCurrentLocation(); // Fetch current location on component initialization
//   }

//   async getCurrentLocation() {
//     try {
//       const location = await this.locationService.getLocation();
//       this.pickupLocation = `${location.city}, ${location.region}, ${location.country_name}`; // Set the fetched location
//     } catch (error) {
//       console.error('Error fetching location:', error);
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { LocationService } from '../../services/location.service'; // Adjust the path based on the file structure
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';  // Import FormsModule
// import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-bookings',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],  // Add FormsModule here
//   templateUrl: './bookings.component.html',
//   styleUrls: ['./bookings.component.css']
// })
// export class BookingsComponent implements OnInit {
//   pickupLocation: string = ''; // Define the property
//   dropoffLocation: string = ''; // Define the property

//   constructor(private locationService: LocationService) {}

//   ngOnInit(): void {
//     this.getCurrentLocation(); // Fetch current location on component initialization
//   }

//   async getCurrentLocation() {
//     try {
//       const location = await this.locationService.getLocation();
//       this.pickupLocation = `${location.city}, ${location.region}, ${location.country_name}`; // Set the fetched location
//     } catch (error) {
//       console.error('Error fetching location:', error);
//     }
//   }
// }



import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service'; // Your location service
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  pickupLocation: string = ''; // Define the property
  dropoffLocation: string = ''; // Define the property
  suggestions: string[] = []; // Array to store location suggestions

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.getCurrentLocation(); // Fetch current location on component initialization
  }

  // Fetch user's current location
  async getCurrentLocation() {
    try {
      const location = await this.locationService.getLocation();
      this.pickupLocation = `${location.city}, ${location.region}, ${location.country_name}`;
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }

  // Triggered when user types in the pickup location input
  onPickupLocationInput() {
    if (this.pickupLocation.length > 2) {
      this.fetchLocationSuggestions(this.pickupLocation);
    } else {
      this.suggestions = []; // Clear suggestions when input is short
    }
  }

  // Fetch location suggestions (can use a real API or mock data)
  fetchLocationSuggestions(query: string) {
    // Example: Mock data for demo purposes
    const mockSuggestions = [
      `${query}, New York`,
      `${query}, Los Angeles`,
      `${query}, Chicago`,
      `${query}, Houston`,
      `${query}, india`
    ];
    
    // Simulate an API call
    setTimeout(() => {
      this.suggestions = mockSuggestions;
    }, 300); // Simulate a delay of 300ms
  }

  // When a suggestion is clicked, fill the input with the suggestion
  selectPickupLocation(suggestion: string) {
    this.pickupLocation = suggestion;
    this.suggestions = []; // Clear the suggestions after selection
  }
}


