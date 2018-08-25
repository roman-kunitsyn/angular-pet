import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModelPropertyComponent } from './crud-model-property.component';

describe('CrudModelPropertyComponent', () => {
  let component: CrudModelPropertyComponent;
  let fixture: ComponentFixture<CrudModelPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModelPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModelPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
