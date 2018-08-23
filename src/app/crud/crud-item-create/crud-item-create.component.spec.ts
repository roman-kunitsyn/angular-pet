import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CrudItemCreateComponent } from "./crud-item-create.component";

describe("CrudItemCreateComponent", () => {
  let component: CrudItemCreateComponent;
  let fixture: ComponentFixture<CrudItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudItemCreateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
