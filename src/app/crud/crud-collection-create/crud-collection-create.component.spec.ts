import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCollectionCreateComponent } from './crud-collection-create.component';

describe('CrudCollectionCreateComponent', () => {
  let component: CrudCollectionCreateComponent;
  let fixture: ComponentFixture<CrudCollectionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCollectionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCollectionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
