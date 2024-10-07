

export default function DH_navBar(){
  return(
    <div class="body">
    <div class="container">
        <h1>Driver Profile</h1>
        <form id="driverProfileForm">
            <label for="fullName">Full Name:</label>
            <input type="text" id="fullName" placeholder="Enter your full name" required/>
      
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required/>
      
            <label for="phoneNumber">Phone Number:</label>
            <div class="phone-number">
                <select id="countryCode" required>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91" selected>+91 (India)</option>
                    <option value="+61">+61 (Australia)</option>
                    <option value="+81">+81 (Japan)</option>
                </select>
                <input type="tel" id="phoneNumber" placeholder="Enter your phone number" required/>
            </div>
      
            <label for="vehicleNumber">Vehicle Number:</label>
            <input type="text" id="vehicleNumber" placeholder="Enter vehicle number (e.g., ABC-1234)" required/>
      
            <label for="profilePicture">Profile Picture:</label>
            <input type="file" id="profilePicture" accept="image/*"/>
      
            <button type="submit" id="saveProfileButton">Save Profile</button>
        </form>
    </div>
  
</div>

  );
}