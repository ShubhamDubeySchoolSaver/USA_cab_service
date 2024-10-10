import { Link } from 'react-router-dom';

export default function Registration() {
  return (
    <div>
      {/* Navigation Bar */}
      <header>
        <nav className="navbar bg-white p-6 shadow-lg flex justify-between items-center">
          {/* <img src="/path-to-logo/logo.png" alt="Restaurant Logo" className="logo w-24" /> */}
          <ul className="nav-links flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
            <li><Link to="/menu" className="text-gray-700 hover:text-gray-900">Menu</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
            <li><Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link></li>
          </ul>
          <button className="login-btn bg-blue-500 text-white px-4 py-2 rounded">
            <Link to="/login">Login</Link>
          </button>
        </nav>
      </header>

      {/* Signup Form */}
      <div className="signup-container flex justify-center items-center min-h-screen bg-gray-100">
        <div className="signup-box bg-white p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6">Register Your Restaurant</h2>
          <form action="#">
            {/* Owner Name */}
            <div className="mb-4">
              <label htmlFor="owner-name" className="block text-gray-700">Owner's Name</label>
              <input
                type="text"
                id="owner-name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter owner's full name"
                required
              />
            </div>

            {/* Restaurant Name */}
            <div className="mb-4">
              <label htmlFor="restaurant-name" className="block text-gray-700">Restaurant Name</label>
              <input
                type="text"
                id="restaurant-name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter restaurant name"
                required
              />
            </div>

            {/* Restaurant Type */}
            <div className="mb-4">
              <label htmlFor="restaurant-type" className="block text-gray-700">Restaurant Type</label>
              <select id="restaurant-type" className="w-full p-2 border border-gray-300 rounded mt-1" required>
                <option value="">Select Restaurant Type</option>
                <option value="dine-in">Dine-In</option>
                <option value="cloud-kitchen">Cloud Kitchen</option>
              </select>
            </div>

            {/* Food Serving */}
            <div className="mb-4">
              <label htmlFor="food-serving" className="block text-gray-700">Foods Serving</label>
              <select id="food-serving" className="w-full p-2 border border-gray-300 rounded mt-1" required>
                <option value="">Select Food Type</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
                <option value="both">Both</option>
              </select>
            </div>

            {/* Cuisine Type */}
            <div className="mb-4">
              <label htmlFor="cuisine" className="block text-gray-700">Cuisine Type</label>
              <select id="cuisine" className="w-full p-2 border border-gray-300 rounded mt-1" required>
                <option value="">Select Cuisine</option>
                <option value="indian">Indian</option>
                <option value="chinese">Chinese</option>
                <option value="western">Western</option>
              </select>
            </div>

            {/* File Uploads */}
            <div className="mb-4">
              <label htmlFor="fssai" className="block text-gray-700">Upload FSSAI License</label>
              <input type="file" id="fssai" className="w-full p-2 mt-1" required />
            </div>

            <div className="mb-4">
              <label htmlFor="menu" className="block text-gray-700">Upload Restaurant Menu</label>
              <input type="file" id="menu" className="w-full p-2 mt-1" required />
            </div>

            <div className="mb-4">
              <label htmlFor="dish-images" className="block text-gray-700">Top 5 Dish Images</label>
              <input type="file" id="dish-images" className="w-full p-2 mt-1" multiple required />
            </div>

            {/* Bank Account Details */}
            <h3 className="text-lg font-semibold mb-4">Bank Account Details</h3>

            <div className="mb-4">
              <label htmlFor="account-number" className="block text-gray-700">Account Number</label>
              <input
                type="text"
                id="account-number"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter Bank Account Number"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="ifsc-code" className="block text-gray-700">IFSC Code</label>
              <input
                type="text"
                id="ifsc-code"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter IFSC Code"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="branch-name" className="block text-gray-700">Branch Name</label>
              <input
                type="text"
                id="branch-name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Enter Branch Name"
                required
              />
            </div>

            {/* Account Login Details */}
            <button type="submit" className="signup-submit bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600">
              Create Account
            </button>

            <div className="login-options mt-4 text-center">
              <p>
                Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
