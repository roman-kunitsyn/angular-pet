import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModelSearchComponent } from './crud-model-search.component';

describe('CrudModelSearchComponent', () => {
  let component: CrudModelSearchComponent;
  let fixture: ComponentFixture<CrudModelSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModelSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
