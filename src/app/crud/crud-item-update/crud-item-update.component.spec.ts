import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CrudItemUpdateComponent } from "./crud-item-update.component";

describe("CrudItemUpdateComponent", () => {
  let component: CrudItemUpdateComponent;
  let fixture: ComponentFixture<CrudItemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudItemUpdateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
