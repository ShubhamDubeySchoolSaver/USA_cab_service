import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,RouterLinkWithHref,DatePipe,CurrencyPipe],
  templateUrl: './earnings.component.html',
  styleUrl: './earnings.component.css'
})
export class EarningsComponent {
  city="chennai"
  fare= 300;
  now= Date.now();
  today:number =this.now;
  earnings:number =400;
  onlineHours:string= "8hr 56m" ;
 
  constructor(private router: Router){}

  navigateToHome(){
    this.router.navigate(['/']);
  }
}

