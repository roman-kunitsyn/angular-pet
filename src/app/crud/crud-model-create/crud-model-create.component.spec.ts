import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModelCreateComponent } from './crud-model-create.component';

describe('CrudModelCreateComponent', () => {
  let component: CrudModelCreateComponent;
  let fixture: ComponentFixture<CrudModelCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModelCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
