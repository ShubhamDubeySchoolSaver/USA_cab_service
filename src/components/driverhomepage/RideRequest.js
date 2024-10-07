

export default function RideRequest(){
  return(
    // @if(multiRides&& isEnabled)
    <>
      {/* // @if(multiRides&& isEnabled) */}
      <div id="ride-requests-container">
        {/* // <!-- Ride request boxes will be dynamically inserted here --> */}

        {/* @for(request of requests; track request.id){ */}
        <div class="ride-request-box">

          <h4> {{ requestname }}</h4>
          <details>
            <summary>Details</summary>
            Something small enough to escape casual notice.
          </details>

        </div>
        {/* } */}
      </div>
      {/* // }
      // @else if(isEnabled) { */}
      <div class="loginModal">
        {/* <!-- Trip Radar Card Component --> */}
        <div class="trip-card">
          <div class="card-header">
            <span class="trip-type">UberX</span>
            <span class="notification-icon">🔔 2</span>
          </div>
          <div class="price-range">$8.00 - $10.00</div>
          <div class="rating">★ 5.00</div>
          <div class="trip-info">
            <p><strong>18 mins (12.3 mi) away</strong></p>
            <p>Destination Address</p>
            <p><strong>12 mins (3.15 mi) trip</strong></p>
          </div>
          <button class="accept-button">Accept</button>
        </div>
      </div></>
// }

  );
}