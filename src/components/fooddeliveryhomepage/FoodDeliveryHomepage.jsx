export default function FoodDeliveryHomepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg py-4 px-6 flex justify-between">
        <div className="nav-item text-gray-800 font-semibold">Home</div>
        <div className="nav-item text-gray-800 font-semibold">Profile</div>
        <div className="nav-item text-gray-800 font-semibold">Orders</div>
        <div className="nav-item text-gray-800 font-semibold">Transport</div>
      </nav>

      {/* Search Bar */}
      <section className="bg-white py-6 px-8 shadow-md">
        <input
          type="text"
          placeholder="Search food items, restaurants, or cuisines..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
      </section>

      {/* Restaurant Listings */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Nearby Restaurants</h2>
        <div className="space-y-4">
          <div className="restaurant bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Fast Bites</h3>
            <p className="text-gray-600">Fast Food | Rating: 4.5 | Delivery Time: 30 mins</p>
          </div>
          <div className="restaurant bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Tandoori Palace</h3>
            <p className="text-gray-600">Indian | Rating: 4.7 | Delivery Time: 40 mins</p>
          </div>
          <div className="restaurant bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Dragon Express</h3>
            <p className="text-gray-600">Chinese | Rating: 4.4 | Delivery Time: 25 mins</p>
          </div>
        </div>
      </section>

      {/* Menu Display */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div className="menu-item flex justify-between bg-white p-4 rounded-lg shadow-md mb-4">
          <p>Burger</p>
          <span>$5.99</span>
        </div>
        <div className="menu-item flex justify-between bg-white p-4 rounded-lg shadow-md mb-4">
          <p>Chicken Tikka</p>
          <span>$8.49</span>
        </div>
        <div className="menu-item flex justify-between bg-white p-4 rounded-lg shadow-md">
          <p>Kung Pao Chicken</p>
          <span>$7.99</span>
        </div>
      </section>

      {/* Cart Overview */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        <div className="cart-item flex justify-between bg-white p-4 rounded-lg shadow-md mb-4">
          <p>Burger</p>
          <span>$5.99</span>
        </div>
        <div className="cart-item flex justify-between bg-white p-4 rounded-lg shadow-md mb-4">
          <p>Chicken Tikka</p>
          <span>$8.49</span>
        </div>
        <div className="total-cost bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
          <h3 className="text-xl font-bold">Total: $14.48</h3>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
}
