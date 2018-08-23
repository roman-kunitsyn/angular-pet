import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CrudItemReadComponent } from "./crud-item-read.component";

describe("CrudItemReadComponent", () => {
  let component: CrudItemReadComponent;
  let fixture: ComponentFixture<CrudItemReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudItemReadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudItemReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
