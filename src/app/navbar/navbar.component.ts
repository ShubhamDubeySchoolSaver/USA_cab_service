import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import {NgIf} from '@angular/common'
import { EarningsComponent } from '../earnings/earnings.component';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,RouterLinkWithHref,ProfileComponent,NgIf,EarningsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showPopup = false;

  constructor(private router: Router){}
  navigateToEarnings(){
    this.showPopup=false;
    this.router.navigate(['/earnings']);
  }
  navigateToProfile(){
    this.router.navigate(['/profile'])
  }
}