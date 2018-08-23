import { InMemoryDbService } from "angular-in-memory-web-api";
import { CRUDLIST } from "./crud-mocks";

export class InMemoryCrudService implements InMemoryDbService {
  createDb() {
    const crudList = CRUDLIST;
    return { crudList };
  }
}
