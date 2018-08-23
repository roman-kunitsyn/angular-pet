import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CrudItem } from "../crud-item";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-crud-item-read",
  templateUrl: "./crud-item-read.component.html",
  styleUrls: ["./crud-item-read.component.scss"]
})
export class CrudItemReadComponent implements OnInit {
  crudItem: CrudItem;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getCrudItem();
  }

  getCrudItem() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.crudService
      .getCrudItem(id)
      .subscribe(crudItem => (this.crudItem = crudItem));
  }

  goBack(): void {
    this.location.back();
  }
}
