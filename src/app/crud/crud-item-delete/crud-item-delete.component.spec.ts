import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CrudItemDeleteComponent } from "./crud-item-delete.component";

describe("CrudItemDeleteComponent", () => {
  let component: CrudItemDeleteComponent;
  let fixture: ComponentFixture<CrudItemDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudItemDeleteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
