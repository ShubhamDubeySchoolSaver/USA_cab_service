import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchBarComponent {
  selectedRideType: string = 'Auto';
  rides = [
    {
      category: 'Auto',
      driver: 'John Doe',
      rating: 4.5,
      vehicle: 'Auto',
      fare: '$10'
    },
    {
      category: 'Cab',
      driver: 'Jane Smith',
      rating: 4.7,
      vehicle: 'Sedan',
      fare: '$15'
    },
    {
      category: 'Bike',
      driver: 'Alex Johnson',
      rating: 4.3,
      vehicle: 'Bike',
      fare: '$8'
    }
  ];

  get filteredRides() {
    
    return this.rides.filter(ride => ride.category === this.selectedRideType);
  }
}

