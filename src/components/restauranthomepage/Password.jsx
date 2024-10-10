import { useState } from "react";

export default function Password() {
  // State to control the forgot password modal visibility
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);

  // Function to show the forgot password modal
  const showForgotPasswordModal = () => {
    setIsForgotPasswordVisible(true);
  };

  // Function to close the forgot password modal
  const closeForgotPasswordModal = () => {
    setIsForgotPasswordVisible(false);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <header>
        <nav className="navbar flex justify-between items-center bg-gray-100 p-4 shadow-md">
          {/* Logo */}
          <img src="logo.png" alt="Restaurant Logo" className="logo w-16" />
          {/* Navigation Links */}
          <ul className="nav-links flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Menu</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          </ul>
          {/* Login Button */}
          <button className="login-btn bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        </nav>
      </header>

      {/* Login Form */}
      <div className="login-container flex justify-center items-center h-screen bg-gray-50">
        <div className="login-box bg-white p-8 shadow-lg rounded">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your password"
              required
            />

            <button type="submit" className="login-submit bg-blue-500 text-white py-2 px-4 rounded w-full mb-4">Login</button>

            <div className="login-options text-center">
              <p className="text-gray-600">Forgot your password? <a href="#" onClick={showForgotPasswordModal} className="text-indigo-600 hover:underline">Click here</a></p>
              <p className="text-gray-600">Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {isForgotPasswordVisible && (
        <div id="forgot-password-modal" className="modal fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-8 rounded shadow-lg">
            <span onClick={closeForgotPasswordModal} className="close text-gray-500 float-right cursor-pointer">&times;</span>
            <h2 className="text-xl font-bold mb-6">Create New Password</h2>
            <form>
              <label htmlFor="new-password" className="block text-gray-700">New Password</label>
              <input
                type="password"
                id="new-password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Enter new password"
                required
              />

              <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="Confirm new password"
                required
              />

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
