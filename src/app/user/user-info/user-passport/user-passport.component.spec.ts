import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPassportComponent } from './user-passport.component';

describe('UserPassportComponent', () => {
  let component: UserPassportComponent;
  let fixture: ComponentFixture<UserPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
