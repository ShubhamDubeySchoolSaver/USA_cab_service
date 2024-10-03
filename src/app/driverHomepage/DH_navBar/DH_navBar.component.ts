import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import {NgIf, NgOptimizedImage} from '@angular/common'
import { EarningsComponent } from '../earnings/earnings.component';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-dh-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,RouterLinkWithHref,ProfileComponent,NgIf,EarningsComponent,NgOptimizedImage],
  templateUrl: './DH_navBar.component.html',
  styleUrl: './DH_navBar.component.css'
})
export class DH_NavbarComponent {
  showPopup = false;

}