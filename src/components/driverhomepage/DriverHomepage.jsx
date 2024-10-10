export default function DriverHomepage({ earnings, showRideRequest }) {
  return (
    <div id="map" className="h-[700px] w-full relative">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center bg-gray-800 text-white p-4">
        {/* Menu icon */}
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>

        {/* Earnings */}
        <a
          routerLink="dh/earnings"
          routerLinkActive="active"
          className="text-yellow-400"
        >
          <div className="earnings-badge text-lg font-bold">{earnings}</div>
        </a>

        {/* Profile icon */}
        <div className="profile-pic">
          <a routerLink="dh/profile" routerLinkActive="active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-user-round"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </a>
        </div>
      </div>

      {/* Route indicator */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-md">
        $8.50 for 3 miles
      </div>

      {/* Central navigation icon */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-3xl text-green-500">
        ▲
      </div>

      {/* Ride request component */}
      {showRideRequest && <div className="absolute bottom-16 w-full"><app-ride-requests /></div>}

      {/* Go button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-2xl font-bold px-6 py-3 rounded-full shadow-lg cursor-pointer">
        GO
      </div>
    </div>
  );
}
