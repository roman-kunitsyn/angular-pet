import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CrudNavigationComponent } from "./crud-navigation.component";

describe("CrudNavigationComponent", () => {
  let component: CrudNavigationComponent;
  let fixture: ComponentFixture<CrudNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
