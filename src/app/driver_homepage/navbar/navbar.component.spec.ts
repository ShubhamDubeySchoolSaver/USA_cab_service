import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DH_NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: DH_NavbarComponent;
  let fixture: ComponentFixture<DH_NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DH_NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DH_NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
