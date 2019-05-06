import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodNavComponent } from './food-nav.component';

describe('FoodNavComponent', () => {
  let component: FoodNavComponent;
  let fixture: ComponentFixture<FoodNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
