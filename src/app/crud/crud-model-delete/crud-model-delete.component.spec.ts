import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModelDeleteComponent } from './crud-model-delete.component';

describe('CrudModelDeleteComponent', () => {
  let component: CrudModelDeleteComponent;
  let fixture: ComponentFixture<CrudModelDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModelDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
