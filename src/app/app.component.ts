import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DH_NavbarComponent } from './driverHomepage/DH_navBar/DH_navBar.component';
import { LoginPageComponent } from './restaurantLoginpage/loginPage/loginPage.component';
import { FoodDeliveryHomepageComponent } from './foodDeliveryHomepage/foodDeliveryHomepage.component';
import { RH_NavBarComponent } from './riderHomepage/RHnavBar/RH_navBar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,LoginPageComponent, DH_NavbarComponent,FoodDeliveryHomepageComponent,RH_NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

