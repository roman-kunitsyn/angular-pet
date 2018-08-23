import { Component, OnInit } from "@angular/core";
import { CrudService } from "../crud.service";
import { CrudItem } from "../crud-item";

@Component({
  selector: "app-crud-list",
  templateUrl: "./crud-list.component.html",
  styleUrls: ["./crud-list.component.scss"]
})
export class CrudListComponent implements OnInit {
  crudList: CrudItem[];
  constructor(private crudServise: CrudService) {}

  ngOnInit() {
    this.getCrudList();
  }

  getCrudList(): void {
    this.crudServise
    .getCrudList()
    .subscribe(crudList => (this.crudList = crudList));
  }
}
