

export default function DriverHomepage(){
  return(
    
<div id="map" style="height: 700px; width: 100%;"> 
 {/* <!-- Top bar --> */}
  
  <div class="top-bar">
    <div class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg></div>
   <a routerLink="dh/earnings" routerLinkActive="active" class="nav-item"><div class="earnings-badge">
        {{earnings}}
  </div>  </a>
    <div  class="profile-pic">
      <a routerLink="dh/profile" routerLinkActive="active"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" color="black" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg></a>
    </div>
  </div>



  {/* <!-- Route indicator --> */}
  <div class="route-indicator">
    $8.50 for 3 miles
  </div>

  {/* <!-- Central navigation icon --> */}
  <div class="navigation-icon">▲</div>
@if(showRideRequest){
  <app-ride-requests></app-ride-requests>
}
  {/* <!-- Go button --> */}
  <div class="go-button">GO</div>

  {/* <!-- Bottom bar --> */}
  {/* <!-- <div class="bottom-bar">
  <div class ="blank"></div>
    <div class="status">You're offline</div>
    <div class="menu-icon"></div>
  </div> --> */}
</div>



  );
}