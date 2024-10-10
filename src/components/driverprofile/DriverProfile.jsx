export default function DriverProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6">
      <div className="container max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Driver Profile</h1>
        <form id="driverProfileForm" className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <div className="flex space-x-2 mt-1">
              <select
                id="countryCode"
                required
                className="border border-gray-300 p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91" selected>+91 (India)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phone number"
                required
                className="w-full border border-gray-300 p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Vehicle Number */}
          <div>
            <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">Vehicle Number:</label>
            <input
              type="text"
              id="vehicleNumber"
              placeholder="Enter vehicle number (e.g., ABC-1234)"
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Profile Picture */}
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture:</label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          {/* Save Profile Button */}
          <button
            type="submit"
            id="saveProfileButton"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
