import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { DriverProfileUpdateComponent } from './app/driver-profile-update/driver-profile-update.component';
import { LoginPageComponent } from './app/restaurant/login-page/login-page.component';
import { RP_NavbarComponent } from './app/rider_page/navbar/navbar.component';
import { DH_NavbarComponent } from './app/driver_homepage/navbar/navbar.component';



bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(DriverProfileUpdateComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(LoginPageComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(RP_NavbarComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(DH_NavbarComponent,appConfig).catch((err) => console.error(err));
