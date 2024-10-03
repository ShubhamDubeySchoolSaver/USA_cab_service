
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

import { SearchBarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

