

export default function Password(){
  return(
 
    <body>
      {/* <!-- Navigation Bar --> */}
      <header>
        <nav class="navbar">
          <img src="logo.png" alt="Restaurant Logo" class="logo" />
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button class="login-btn">Login</button>
        </nav>
      </header>

      <div class="login-container"></div>
      <div class="login-box">
        <h2>Login</h2>
        <form action="#">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit" class="login-submit">Login</button>

          <div class="login-options">
            <p>Forgot your password? <a href="#" id="forgot-password-link">Click here</a></p>
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </form>
      </div>

    {/* !-- Forgot Password Modal --> */}
    <div id="forgot-password-modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Create New Password</h2>
            <form action="#">
                <label for="new-password">New Password</label>
                <input type="password" id="new-password" placeholder="Enter new password" required/>

                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm new password" required/>

                <button type="submit" class="login-submit">Submit</button>
            </form>
        </div>
    </div>

    <script src="respass.js"></script>
</body>



  );
}