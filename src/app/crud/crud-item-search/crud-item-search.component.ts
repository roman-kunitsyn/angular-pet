import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import { CrudItem } from "../crud-item";
import { CrudService } from "../crud.service";

@Component({
  selector: "app-crud-item-search",
  templateUrl: "./crud-item-search.component.html",
  styleUrls: ["./crud-item-search.component.scss"]
})
export class CrudItemSearchComponent implements OnInit {
  crudList$: Observable<CrudItem[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private location: Location
  ) {}

  ngOnInit() {
    this.crudList$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.crudService.searchCrudItems(term))
    );
  }

  searchCrudItem(searchString: string): void {
    this.searchTerms.next(searchString);
  }

  goBack(): void {
    this.location.back();
  }
}
