import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocumentSearchComponent } from './crud-document-search.component';

describe('CrudDocumentSearchComponent', () => {
  let component: CrudDocumentSearchComponent;
  let fixture: ComponentFixture<CrudDocumentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDocumentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocumentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
