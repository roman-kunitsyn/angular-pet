import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocumentCreateComponent } from './crud-document-create.component';

describe('CrudDocumentCreateComponent', () => {
  let component: CrudDocumentCreateComponent;
  let fixture: ComponentFixture<CrudDocumentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDocumentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocumentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
