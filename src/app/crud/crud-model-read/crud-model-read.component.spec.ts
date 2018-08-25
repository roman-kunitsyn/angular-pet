import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModelReadComponent } from './crud-model-read.component';

describe('CrudModelReadComponent', () => {
  let component: CrudModelReadComponent;
  let fixture: ComponentFixture<CrudModelReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModelReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModelReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
