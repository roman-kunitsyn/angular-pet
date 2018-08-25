import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryCrudService } from "./in-memory-crud.service";

import { CrudRoutingModule } from "./crud-routing.module";
import { CrudListComponent } from "./crud-list/crud-list.component";
import { CrudItemCreateComponent } from "./crud-item-create/crud-item-create.component";
import { CrudItemReadComponent } from "./crud-item-read/crud-item-read.component";
import { CrudItemUpdateComponent } from "./crud-item-update/crud-item-update.component";
import { CrudItemDeleteComponent } from "./crud-item-delete/crud-item-delete.component";
import { CrudItemSearchComponent } from "./crud-item-search/crud-item-search.component";
import { CrudToolbarComponent } from "./crud-toolbar/crud-toolbar.component";
import { CrudModelCreateComponent } from "./crud-model-create/crud-model-create.component";
import { CrudModelReadComponent } from "./crud-model-read/crud-model-read.component";
import { CrudModelUpdateComponent } from "./crud-model-update/crud-model-update.component";
import { CrudModelDeleteComponent } from "./crud-model-delete/crud-model-delete.component";
import { CrudModelListComponent } from "./crud-model-list/crud-model-list.component";
import { CrudModelSearchComponent } from "./crud-model-search/crud-model-search.component";
import { CrudCollectionCreateComponent } from "./crud-collection-create/crud-collection-create.component";
import { CrudCollectionReadComponent } from "./crud-collection-read/crud-collection-read.component";
import { CrudCollectionUpdateComponent } from "./crud-collection-update/crud-collection-update.component";
import { CrudCollectionDeleteComponent } from "./crud-collection-delete/crud-collection-delete.component";
import { CrudCollectionListComponent } from "./crud-collection-list/crud-collection-list.component";
import { CrudCollectionSearchComponent } from "./crud-collection-search/crud-collection-search.component";
import { CrudDocumentCreateComponent } from "./crud-document-create/crud-document-create.component";
import { CrudDocumentReadComponent } from "./crud-document-read/crud-document-read.component";
import { CrudDocumentUpdateComponent } from "./crud-document-update/crud-document-update.component";
import { CrudDocumentDeleteComponent } from "./crud-document-delete/crud-document-delete.component";
import { CrudDocumentListComponent } from "./crud-document-list/crud-document-list.component";
import { CrudDocumentSearchComponent } from "./crud-document-search/crud-document-search.component";
import { CrudModelPropertyComponent } from './crud-model-property/crud-model-property.component';

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
    CrudModelCreateComponent,
    CrudModelReadComponent,
    CrudModelUpdateComponent,
    CrudModelDeleteComponent,
    CrudModelListComponent,
    CrudModelSearchComponent,
    CrudCollectionCreateComponent,
    CrudCollectionReadComponent,
    CrudCollectionUpdateComponent,
    CrudCollectionDeleteComponent,
    CrudCollectionListComponent,
    CrudCollectionSearchComponent,
    CrudDocumentCreateComponent,
    CrudDocumentReadComponent,
    CrudDocumentUpdateComponent,
    CrudDocumentDeleteComponent,
    CrudDocumentListComponent,
    CrudDocumentSearchComponent,
    CrudModelPropertyComponent
  ],
  exports: [
    CrudListComponent,
    CrudItemCreateComponent,
    CrudItemReadComponent,
    CrudItemUpdateComponent,
    CrudItemDeleteComponent,
    CrudItemSearchComponent,
    CrudToolbarComponent,
    CrudModelCreateComponent,
    CrudModelReadComponent,
    CrudModelUpdateComponent,
    CrudModelDeleteComponent,
    CrudModelListComponent,
    CrudModelSearchComponent,
    CrudCollectionCreateComponent,
    CrudCollectionReadComponent,
    CrudCollectionUpdateComponent,
    CrudCollectionDeleteComponent,
    CrudCollectionListComponent,
    CrudCollectionSearchComponent,
    CrudDocumentCreateComponent,
    CrudDocumentReadComponent,
    CrudDocumentUpdateComponent,
    CrudDocumentDeleteComponent,
    CrudDocumentListComponent,
    CrudDocumentSearchComponent
  ]
})
export class CrudModule {}
