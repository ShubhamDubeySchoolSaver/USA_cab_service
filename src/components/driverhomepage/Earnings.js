

export default function DH_navBar(){
  return(
    
<div class="container">
  {/* <!-- Header with back arrow and title --> */}
  <header>
    <div class="back-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg></div>
    <div class="earning_heading">Daily</div>
  </header>

  {/* <!-- Date and Earnings --> */}
  <section class="date-earnings">
    {/* <div class="date">{{ today | date }} </div>
    <div class="earnings">{{ earnings | currency }}</div> */}
  </section>

  {/* <!-- Key Metrics --> */}
  <section class="metrics">
    <div class="metric">
      <div class="value">7</div>
      <div class="label">TRIPS</div>
    </div>
    <div class="metric">
      <div class="value">{{ onlineHours }}</div>
      <div class="label">ONLINE</div>
    </div>
    <div class="metric">
      <div class="value">19</div>
      <div class="label">POINTS</div>
    </div>
  </section>

  {/* <!-- Earnings Breakdown --> */}
  <section class="earnings-breakdown">
    <div class="row">
      <span>Trip Earnings</span>
      <span>$56.16</span>
    </div>
    <div class="row">
      <span>Diamond Reward</span>
      <span>$2.62</span>
    </div>
    <div class="row">
      <span>Toll</span>
      <span>$7.00</span>
    </div>
    <div class="row">
      <span>Consecutive Trips Promotion</span>
      <span>$11.00</span>
    </div>

    <div class="row total">
      <span>Total</span>
      <span>$76.78</span>
    </div>
  </section>

  {/* <!-- See Earnings Activity Button --> */}
  <div class="button-container">
    <button class="earnings-button">SEE EARNINGS ACTIVITY</button>
  </div>
</div>


  );
}