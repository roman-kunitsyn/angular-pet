import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { CrudItemCreateComponent } from "./crud-item-create/crud-item-create.component";
import { CrudItemSearchComponent } from "./crud-item-search/crud-item-search.component";
import { CrudItemReadComponent } from "./crud-item-read/crud-item-read.component";
import { CrudItemUpdateComponent } from "./crud-item-update/crud-item-update.component";
import { CrudItemDeleteComponent } from "./crud-item-delete/crud-item-delete.component";

const routes: Routes = [
  {
    path: "crud-list",
    component: CrudListComponent
  },
  {
    path: "crud-item-create",
    component: CrudItemCreateComponent
  },
  {
    path: "crud-item-search",
    component: CrudItemSearchComponent
  },
  {
    path: "crud-item-read/:id",
    component: CrudItemReadComponent
  },
  {
    path: "crud-item-update/:id",
    component: CrudItemUpdateComponent
  },
  {
    path: "crud-item-delete/:id",
    component: CrudItemDeleteComponent
  },
  {
    path: "",
    redirectTo: "crud-list",
    pathMatch: "full"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class CrudRoutingModule {}
