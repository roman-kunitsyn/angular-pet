import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { CrudItem } from "../crud-item";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-crud-item-create",
  templateUrl: "./crud-item-create.component.html",
  styleUrls: ["./crud-item-create.component.scss"]
})
export class CrudItemCreateComponent implements OnInit {
  crudItem: CrudItem = new CrudItem();

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private location: Location
  ) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

  createCrudItem(title: string): void {
    title = title ? title.trim() : '';
    if (!title) {
      return;
    }
    this.crudService.createCrudItem({ title } as CrudItem).subscribe(() => {
      this.goBack();
    });
  }
}
