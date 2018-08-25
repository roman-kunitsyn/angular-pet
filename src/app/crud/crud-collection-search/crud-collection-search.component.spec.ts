import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCollectionSearchComponent } from './crud-collection-search.component';

describe('CrudCollectionSearchComponent', () => {
  let component: CrudCollectionSearchComponent;
  let fixture: ComponentFixture<CrudCollectionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCollectionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCollectionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
