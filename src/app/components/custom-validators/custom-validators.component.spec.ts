import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorsComponent } from './custom-validators.component';

describe('CustomValidatorsComponent', () => {
  let component: CustomValidatorsComponent;
  let fixture: ComponentFixture<CustomValidatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomValidatorsComponent]
    });
    fixture = TestBed.createComponent(CustomValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
