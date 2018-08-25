import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCollectionReadComponent } from './crud-collection-read.component';

describe('CrudCollectionReadComponent', () => {
  let component: CrudCollectionReadComponent;
  let fixture: ComponentFixture<CrudCollectionReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCollectionReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCollectionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
