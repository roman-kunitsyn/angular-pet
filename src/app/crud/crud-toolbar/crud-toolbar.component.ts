import { Component, OnInit, Input } from "@angular/core";
import { CrudItem } from "../crud-item";

@Component({
  selector: "app-crud-toolbar",
  templateUrl: "./crud-toolbar.component.html",
  styleUrls: ["./crud-toolbar.component.scss"]
})
export class CrudToolbarComponent implements OnInit {
  @Input() crudItem: CrudItem;
  constructor() {}

  ngOnInit() {}
}
