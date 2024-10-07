

export default function DH_navBar(){
  return(

<body>

    {/* <!-- Navigation Bar --> */}
    <nav class="navbar">
        <div class="nav-item">Home</div>
        <div class="nav-item">Profile</div>
        <div class="nav-item">Orders</div>
        <div class="nav-item">Transport</div>
    </nav>

    {/* <!-- Search Bar --> */}
    <section class="search-bar">
        <input type="text" placeholder="Search food items, restaurants, or cuisines..."/>
    </section>

    {/* <!-- Restaurant Listings --> */}
    <section class="restaurant-list">
        <h2>Nearby Restaurants</h2>
        <div class="restaurant">
            <h3>Fast Bites</h3>
            <p>Fast Food | Rating: 4.5 | Delivery Time: 30 mins</p>
        </div>
        <div class="restaurant">
            <h3>Tandoori Palace</h3>
            <p>Indian | Rating: 4.7 | Delivery Time: 40 mins</p>
        </div>
        <div class="restaurant">
            <h3>Dragon Express</h3>
            <p>Chinese | Rating: 4.4 | Delivery Time: 25 mins</p>
        </div>
    </section>

    {/* <!-- Menu Display --> */}
    <section class="menu-display">
        <h2>Menu</h2>
        <div class="menu-item">
            <p>Burger</p>
            <span>$5.99</span>
        </div>
        <div class="menu-item">
            <p>Chicken Tikka</p>
            <span>$8.49</span>
        </div>
        <div class="menu-item">
            <p>Kung Pao Chicken</p>
            <span>$7.99</span>
        </div>
    </section>

    {/* <!-- Cart Overview --> */}
    <section class="cart-overview">
        <h2>Cart</h2>
        <div class="cart-item">
            <p>Burger</p>
            <span>$5.99</span>
        </div>
        <div class="cart-item">
            <p>Chicken Tikka</p>
            <span>$8.49</span>
        </div>
        <div class="total-cost">
            <h3>Total: $14.48</h3>
            <button>Proceed to Checkout</button>
        </div>
    </section>

</body>


  );
}