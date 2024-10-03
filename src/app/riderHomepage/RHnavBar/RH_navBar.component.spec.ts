import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RP_NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: RP_NavbarComponent;
  let fixture: ComponentFixture<RP_NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RP_NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RP_NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
