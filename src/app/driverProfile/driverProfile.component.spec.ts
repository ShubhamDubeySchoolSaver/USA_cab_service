import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverProfileUpdateComponent } from './driver-profile-update.component';

describe('DriverProfileUpdateComponent', () => {
  let component: DriverProfileUpdateComponent;
  let fixture: ComponentFixture<DriverProfileUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverProfileUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
