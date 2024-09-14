import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import {NgIf} from '@angular/common'
import { EarningsComponent } from '../earnings/earnings.component';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ProfileComponent,NgIf,EarningsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showPopup = false;
}