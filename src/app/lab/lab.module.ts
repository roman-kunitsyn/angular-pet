import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabRxjsModule } from "./lab-rxjs/lab-rxjs.module";
import { LabRoutingModule } from "./lab-routing.module";

@NgModule({
  imports: [CommonModule, LabRxjsModule, LabRoutingModule],
  declarations: []
})
export class LabModule {}
