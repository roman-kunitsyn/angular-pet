import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCollectionDeleteComponent } from './crud-collection-delete.component';

describe('CrudCollectionDeleteComponent', () => {
  let component: CrudCollectionDeleteComponent;
  let fixture: ComponentFixture<CrudCollectionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCollectionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCollectionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
