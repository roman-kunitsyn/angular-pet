import { CrudRoutingModule } from "./crud-routing.module";

describe("CrudRoutingModule", () => {
  let crudRoutingModule: CrudRoutingModule;

  beforeEach(() => {
    crudRoutingModule = new CrudRoutingModule();
  });

  it("should create an instance", () => {
    expect(crudRoutingModule).toBeTruthy();
  });
});
