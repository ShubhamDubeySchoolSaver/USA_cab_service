import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DriverHomepageComponent } from './app/driverHomepage/driverHomepage/driverHomepage.component';
import { LoginPageComponent } from './app/restaurantLoginpage/loginPage/loginPage.component';
import { RH_NavBarComponent } from './app/riderHomepage/RHnavBar/RH_navBar.component';
import { DH_NavbarComponent } from './app/driverHomepage/DH_navBar/DH_navBar.component';





bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(DriverHomepageComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(LoginPageComponent,appConfig).catch((err) => console.error(err));
bootstrapApplication(RH_NavBarComponent,appConfig).catch((err) => console.error(err));

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