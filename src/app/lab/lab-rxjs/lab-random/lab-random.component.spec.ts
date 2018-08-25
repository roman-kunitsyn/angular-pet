import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabRandomComponent } from './lab-random.component';

describe('LabRandomComponent', () => {
  let component: LabRandomComponent;
  let fixture: ComponentFixture<LabRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
