import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginPageComponent } from './restaurant_loginpage/login-page/login-page.component';
import { FoDelCusHomPComponent } from './food_delivery_homepage/fo-del-cus-hom-p.component';
import { RP_NavbarComponent } from './rider_homepage/navbar/navbar.component';
import { DH_NavbarComponent } from './driver_homepage/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent, DH_NavbarComponent,FoDelCusHomPComponent,RP_NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

