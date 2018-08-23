import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCrudService } from './in-memory-crud.service';

import { CrudRoutingModule } from "./crud-routing.module";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { CrudItemCreateComponent } from "./crud-item-create/crud-item-create.component";
import { CrudItemReadComponent } from "./crud-item-read/crud-item-read.component";
import { CrudItemUpdateComponent } from "./crud-item-update/crud-item-update.component";
import { CrudItemDeleteComponent } from "./crud-item-delete/crud-item-delete.component";
import { CrudItemSearchComponent } from "./crud-item-search/crud-item-search.component";
import { CrudToolbarComponent } from "./crud-toolbar/crud-toolbar.component";
import { CrudNavigationComponent } from "./crud-navigation/crud-navigation.component";

@NgModule({
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCrudService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    CrudListComponent,
    CrudItemCreateComponent,
    CrudItemReadComponent,
    CrudItemUpdateComponent,
    CrudItemDeleteComponent,
    CrudItemSearchComponent,
    CrudToolbarComponent,
    CrudNavigationComponent
  ],
  exports: [
    CrudRoutingModule,
    CrudListComponent,
    CrudItemCreateComponent,
    CrudItemReadComponent,
    CrudItemUpdateComponent,
    CrudItemDeleteComponent,
    CrudItemSearchComponent,
    CrudToolbarComponent,
    CrudNavigationComponent
  ]
})
export class CrudModule {}
