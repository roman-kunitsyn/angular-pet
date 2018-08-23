import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CrudItem } from "../crud-item";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-crud-item-delete",
  templateUrl: "./crud-item-delete.component.html",
  styleUrls: ["./crud-item-delete.component.scss"]
})
export class CrudItemDeleteComponent implements OnInit {
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

  deleteCrudItem(crudItem: CrudItem): void {
    this.crudService.deleteCrudItem(crudItem).subscribe(res => {
      this.goBack();
    });
  }
}
