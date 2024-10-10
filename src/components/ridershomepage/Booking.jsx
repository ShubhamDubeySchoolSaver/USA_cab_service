import { useState } from "react";

export default function Booking() {
  // State for pickup and drop-off locations
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Handler for input change (you can replace this with actual logic to fetch suggestions)
  const handlePickupLocationInput = (e) => {
    setPickupLocation(e.target.value);
    // Fetch or filter suggestions based on input (mock suggestions here)
    setSuggestions(["Location 1", "Location 2", "Location 3"]);
  };

  const handleDropoffLocationInput = (e) => {
    setDropoffLocation(e.target.value);
    // Fetch or filter suggestions based on input (mock suggestions here)
    setSuggestions(["Location A", "Location B", "Location C"]);
  };

  const selectLocation = (suggestion) => {
    setPickupLocation(suggestion); // or setDropoffLocation if relevant
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <div className="container mt-3">
      {/* Pickup Location */}
      <div className="form-group mt-4">
        <label htmlFor="pickupLocation">
          <strong>Pickup Location:</strong>
        </label>
        <input
          type="text"
          id="pickupLocation"
          className="form-control"
          value={pickupLocation}
          onChange={handlePickupLocationInput}
          placeholder="Enter pickup location"
        />
        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="list-group mt-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => selectLocation(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Drop-off Location */}
      <div className="form-group mt-3">
        <label htmlFor="dropoffLocation">
          <strong>Drop-off Location:</strong>
        </label>
        <input
          type="text"
          id="dropoffLocation"
          className="form-control"
          value={dropoffLocation}
          onChange={handleDropoffLocationInput}
          placeholder="Enter drop-off location"
        />
        {suggestions.length > 0 && (
          <ul className="list-group mt-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => selectLocation(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button className="btn btn-primary mt-3" type="button">
        Search Rides
      </button>
    </div>
  );
}
