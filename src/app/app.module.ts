import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CrudModule } from "./crud/crud.module";
import { UserModule } from "./user/user.module";
import { LabModule } from "./lab/lab.module";
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, CrudModule, UserModule, LabModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
