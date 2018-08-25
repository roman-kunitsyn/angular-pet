import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabRandomComponent } from './lab-random/lab-random.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LabRandomComponent],
  exports: [LabRandomComponent]
})
export class LabRxjsModule { }
