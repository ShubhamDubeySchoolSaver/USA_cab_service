import { useState } from "react";

export default function SearchBar() {
  // Mock rides data
  const rides = [
    { category: "Auto", driver: "John Doe", rating: 4.5, vehicle: "Auto Rickshaw", fare: "$5" },
    { category: "Cab", driver: "Jane Smith", rating: 4.8, vehicle: "Sedan", fare: "$12" },
    { category: "Bike", driver: "Mike Johnson", rating: 4.2, vehicle: "Motorbike", fare: "$3" },
  ];

  // State for selected ride type
  const [selectedRideType, setSelectedRideType] = useState("Auto");

  // Filter rides based on selected ride type
  const filteredRides = rides.filter((ride) => ride.category === selectedRideType);

  return (
    <>
      <div className="container mt-3">
        <div className="form-group">
          <label htmlFor="rideType">
            <strong>Select Ride Type:</strong>
          </label>
          <br />
          <select
            className="form-control"
            id="rideType"
            name="rideType"
            value={selectedRideType}
            onChange={(e) => setSelectedRideType(e.target.value)}
          >
            <option value="Auto">Auto</option>
            <option value="Cab">Cab</option>
            <option value="Bike">Bike</option>
          </select>
        </div>
      </div>

      {/* Available Rides */}
      <div className="bookings container mt-4">
        <h2 className="text-center mb-4">Available Rides</h2>
        <div className="row">
          {filteredRides.length > 0 ? (
            filteredRides.map((ride, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{ride.category}</h5>
                    <p className="card-text">
                      <strong>Driver:</strong> {ride.driver}
                    </p>
                    <p className="card-text">
                      <strong>Rating:</strong> {ride.rating} ⭐
                    </p>
                    <p className="card-text">
                      <strong>Vehicle:</strong> {ride.vehicle}
                    </p>
                    <p className="card-text">
                      <strong>Fare Estimate:</strong> {ride.fare}
                    </p>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-12">
              <p className="text-center">No rides available for the selected type.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
