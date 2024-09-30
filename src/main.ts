import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RideRequestsComponent } from './app/driver_homepage/ride-requests/ride-requests.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(RideRequestsComponent,appConfig).catch((err) => console.error(err));
