import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModelListComponent } from './crud-model-list.component';

describe('CrudModelListComponent', () => {
  let component: CrudModelListComponent;
  let fixture: ComponentFixture<CrudModelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
