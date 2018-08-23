import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CrudItem } from "../crud-item";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-crud-item-update",
  templateUrl: "./crud-item-update.component.html",
  styleUrls: ["./crud-item-update.component.scss"]
})
export class CrudItemUpdateComponent implements OnInit {
  @Input() crudItem: CrudItem;
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

  updateCrudItem(): void {
    this.crudService.updateCrudItem(this.crudItem)
      .subscribe(() => this.goBack());
  }
}
