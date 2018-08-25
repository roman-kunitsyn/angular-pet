import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LabRandomComponent } from "./lab-rxjs/lab-random/lab-random.component";


const routes: Routes = [
  {
    path: "lab/lab-random",
    component: LabRandomComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class LabRoutingModule {}
