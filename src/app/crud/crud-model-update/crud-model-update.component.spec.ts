import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModelUpdateComponent } from './crud-model-update.component';

describe('CrudModelUpdateComponent', () => {
  let component: CrudModelUpdateComponent;
  let fixture: ComponentFixture<CrudModelUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModelUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
