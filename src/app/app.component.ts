import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DH_NavbarComponent } from './driverHomepage/DH_navBar/DH_navBar.component';
import { LoginPageComponent } from './restaurantLoginpage/loginPage/loginPage.component';
import { FoodDeliveryHomepageComponent } from './foodDeliveryHomepage/foodDeliveryHomepage.component';
import { RP_NavBarComponent } from './riderHomepage/RHnavBar/RH_navBar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent, DH_NavbarComponent,FoodDeliveryHomepageComponent,RP_NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

