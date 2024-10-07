

export default function CreateAccount(){
  return(
  
<body>
    <header>
        <nav class="navbar">
            <img src="C:\Users\MYPC\Downloads\logo.png" alt="Restaurant Logo" class="logo"/>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button class="login-btn"><a href="E:\skool saver projects\USA_cab_service\src\app\restaurant\login-page\login-page.component.html">Login</a></button>
            
        </nav>
    </header>

    <div class="signup-container">
        <div class="signup-box">
            <h2>Create Your Restaurant Account</h2>
            <form action="#">
                <label for="owner-name">Owner's Name</label>
                <input type="text" id="owner-name" placeholder="Enter your full name" required/>
                
                <label for="restaurant-name">Restaurant Name</label>
                <input type="text" id="restaurant-name" placeholder="Enter your restaurant name" required/>

                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
                
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Create a password" required/>

                <button type="submit" class="signup-submit"><a href="E:\skool saver projects\USA_cab_service\src\app\restaurant\details\details.component.html">Next</a></button>

                <div class="login-options">
                    <p>Already have an account? <a href="E:\skool saver projects\USA_cab_service\src\app\restaurant\login-page\login-page.component.html">Login here</a></p>
                </div>
            </form>
        </div>
    </div>
</body>



  );
}