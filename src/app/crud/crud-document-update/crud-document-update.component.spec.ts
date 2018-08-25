import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocumentUpdateComponent } from './crud-document-update.component';

describe('CrudDocumentUpdateComponent', () => {
  let component: CrudDocumentUpdateComponent;
  let fixture: ComponentFixture<CrudDocumentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDocumentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocumentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
