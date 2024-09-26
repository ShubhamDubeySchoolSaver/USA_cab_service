import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoDelCusHomPComponent } from './fo-del-cus-hom-p.component';

describe('FoDelCusHomPComponent', () => {
  let component: FoDelCusHomPComponent;
  let fixture: ComponentFixture<FoDelCusHomPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoDelCusHomPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoDelCusHomPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
