import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCollectionListComponent } from './crud-collection-list.component';

describe('CrudCollectionListComponent', () => {
  let component: CrudCollectionListComponent;
  let fixture: ComponentFixture<CrudCollectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCollectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
