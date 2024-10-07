

export default function DH_navBar(){
  return(
    
<body>
    <header>
        <nav class="navbar">
            {/* <!-- <img src="C:\Users\MYPC\Downloads\logo.png" alt="Restaurant Logo" class="logo"> --> */}
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            
        </nav>
    </header>
    
    
    <div class="login-container">
        <div class="login-box">
            <h2>Login to Your Account</h2>
            <form action="#">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required/>
                
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required/>
                
                <button type="submit" class="login-submit">Login</button>
                
                <div class="login-options">
                    <a href="#">Forgot Password?</a>
                    <span> | </span>
                    {/* <!-- <a href="E:\skool saver projects\USA_cab_service\src\app\restaurant\createacc\createacc.component.html">Create an Account</a> --> */}
                </div>
            </form>
        </div>
    </div>

    
    
    <footer>
        <p>&copy; 2024 Restaurant, All Rights Reserved.</p>
    </footer>
</body>


    

  );
}