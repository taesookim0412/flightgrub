import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodLandingComponent } from './food-landing.component';

describe('FoodLandingComponent', () => {
  let component: FoodLandingComponent;
  let fixture: ComponentFixture<FoodLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
