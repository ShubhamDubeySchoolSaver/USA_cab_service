import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { DH_NavbarComponent } from './app/driver_homepage/navbar/navbar.component';
import { DriverProfileUpdateComponent } from './app/driver_profile/driver-profile-update.component';
import { LoginPageComponent } from './app/restaurant_loginpage/login-page/login-page.component';
import { RP_NavbarComponent } from './app/rider_homepage/navbar/navbar.component';



bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(DriverProfileUpdateComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(LoginPageComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(RP_NavbarComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(DH_NavbarComponent,appConfig).catch((err) => console.error(err));

// @NgModule({
//   imports: [
//     BrowserModule,
//     AgmCoreModule.forRoot({
//       apiKey: '66f64e1062ba7598220504qyr50f156'
//     })
//   ],
//   providers: [],
//   declarations: [ AppComponent ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule {}