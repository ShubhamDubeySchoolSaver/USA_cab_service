
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-searchbar',
//   standalone: true,
//   imports: [],
//   templateUrl: './searchbar.component.html',
//   styleUrl: './searchbar.component.css'
// })
// export class SearchbarComponent {
// onSearch() {
// throw new Error('Method not implemented.');
// }

// }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

