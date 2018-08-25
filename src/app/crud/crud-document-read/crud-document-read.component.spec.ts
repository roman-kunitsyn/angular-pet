import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocumentReadComponent } from './crud-document-read.component';

describe('CrudDocumentReadComponent', () => {
  let component: CrudDocumentReadComponent;
  let fixture: ComponentFixture<CrudDocumentReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDocumentReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocumentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
