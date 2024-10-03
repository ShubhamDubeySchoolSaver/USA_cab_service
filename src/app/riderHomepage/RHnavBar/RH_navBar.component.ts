import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rh-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './RH_navBar.component.html',
  styleUrl: './RH_navBar.component.css'
})
export class RH_NavBarComponent {

}
