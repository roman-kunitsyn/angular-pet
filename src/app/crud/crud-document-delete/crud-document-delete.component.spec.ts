import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocumentDeleteComponent } from './crud-document-delete.component';

describe('CrudDocumentDeleteComponent', () => {
  let component: CrudDocumentDeleteComponent;
  let fixture: ComponentFixture<CrudDocumentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDocumentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocumentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
