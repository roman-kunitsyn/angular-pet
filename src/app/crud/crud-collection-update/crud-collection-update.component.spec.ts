import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCollectionUpdateComponent } from './crud-collection-update.component';

describe('CrudCollectionUpdateComponent', () => {
  let component: CrudCollectionUpdateComponent;
  let fixture: ComponentFixture<CrudCollectionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCollectionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCollectionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
