import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import {NgIf, NgOptimizedImage} from '@angular/common'
import { EarningsComponent } from '../earnings/earnings.component';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,RouterLinkWithHref,ProfileComponent,NgIf,EarningsComponent,NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showPopup = false;

  constructor(private router: Router, private renderer: Renderer2){}
  navigateToEarnings(){
    this.showPopup=false;
    this.router.navigate(['/earnings']);
  }
  navigateToProfile(){
    this.router.navigate(['/profile'])
  }

//  ngOnInit(): void {
//     // Get the user's preferred theme from localStorage or the system preference
//     const userPreferredTheme = localStorage.getItem('theme');
//     const systemPreferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
//     const theme = userPreferredTheme ? userPreferredTheme : systemPreferredTheme;
//     this.setTheme(theme);
//   }

//   toggleTheme(): void {
//     // Get the current theme
//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';

//     this.setTheme(newTheme);
//     localStorage.setItem('theme', newTheme); // Store the user's choice in localStorage
//   }

//   private setTheme(theme: string): void {
//     if (theme === 'dark') {
//       this.renderer.setAttribute(document.documentElement, 'data-theme', 'dark');
//     } else {
//       this.renderer.setAttribute(document.documentElement, 'data-theme', 'light');
//     }
//   }
}