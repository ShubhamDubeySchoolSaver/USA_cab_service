

export default function DH_navBar(){
  return(
    

  <><div class="container mt-3">

      {/* <!-- Pickup Location --> */}
      <div class="form-group mt-4">
        <label for="pickupLocation"><strong>Pickup Location:</strong></label>
        <input
          type="text"
          id="pickupLocation"
          class="form-control"
          // [(ngModel)]="pickupLocation"
          // (input)="onPickupLocationInput()" 
          placeholder="Enter pickup location" />

        {/* <!-- Suggestions Dropdown --> */}
        <ul class="list-group mt-2"
        >
          <li>
          {/* // class="list-group-item"
            // *ngFor="let suggestion of suggestions"
            // (click)="selectPickupLocation(suggestion)" */}
            
            {{ suggestion }}
          </li>
        </ul>
      </div>

      {/* <!-- Drop-off Location --> */}
      <div class="form-group mt-3">
        <label for="dropoffLocation"><strong>Drop-off Location:</strong></label>
        <input
          type="text"
          id="dropoffLocation"
          class="form-control"
          // [(ngModel)]="dropoffLocation"
          // (input)="onPickupLocationInput()" 
          placeholder="Enter drop-off location" />
        <ul class="list-group mt-2" >
      {/* //  *ngIf="suggestions.length > 0"> */}
        <li>
          {/* class="list-group-item"
          // *ngFor="let suggestion of suggestions"
          // (click)="selectPickupLocation(suggestion)" */}

          {{ suggestion }}
        </li>
      </ul>
    </div><button class="btn btn-primary mt-3" routerLink="/searchbar" type="button">
        Search Rides
      </button><router-outlet></router-outlet>
  </div>
  </>

  );
}