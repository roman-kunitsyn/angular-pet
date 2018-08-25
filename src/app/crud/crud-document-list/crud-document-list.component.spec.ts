import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocumentListComponent } from './crud-document-list.component';

describe('CrudDocumentListComponent', () => {
  let component: CrudDocumentListComponent;
  let fixture: ComponentFixture<CrudDocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
