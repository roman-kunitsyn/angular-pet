import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CrudItemSearchComponent } from "./crud-item-search.component";

describe("CrudItemSearchComponent", () => {
  let component: CrudItemSearchComponent;
  let fixture: ComponentFixture<CrudItemSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudItemSearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
