

export default function SearchBar(){
  return(
    <><div class="container mt-3">
      <div class="form-group">
        <label for="rideType"><strong>Select Ride Type:</strong></label>
        <br/>
          <select class="form-control" id="rideType" name="rideType" >
          {/* [(ngModel)]="selectedRideType" */}

          <option value="Auto" selected>Auto</option>
          <option value="Cab">Cab</option>
          <option value="Bike">Bike</option>
        </select>
      </div>
    </div>
      {/* // !-- Available Rides --> */}
      <div class="bookings container mt-4">
        <h2 class="text-center mb-4">Available Rides</h2>
        <div class="row">
          <div class="col-md-4" > 
          {/* *ngFor="let ride of filteredRides" */}
          
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <h5 class="card-title">
              {/* {{ ride,: .category }} */}
              </h5>
              <p class="card-text"><strong>Driver:</strong> 
              {/* {{ ride,: .driver }} */}
              </p>
              <p class="card-text"><strong>Rating:</strong>
               {/* {{ ride,: .rating }} ⭐ */}
               </p>
              <p class="card-text"><strong>Vehicle:</strong>
               {/* {{ ride,: .vehicle }} */}
              </p>
              <p class="card-text"><strong>Fare Estimate:</strong>
               {/* {{ ride,: .fare }} */}
              </p>
              <button class="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      </div>
</>
    

  );
}