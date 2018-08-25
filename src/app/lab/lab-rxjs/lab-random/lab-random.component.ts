import { Component, OnInit } from "@angular/core";
import { LabRandomService } from "./lab-random.service";

@Component({
  selector: "app-lab-random",
  templateUrl: "./lab-random.component.html",
  styleUrls: ["./lab-random.component.scss"]
})
export class LabRandomComponent implements OnInit {
  randomValue: number;
  constructor(private randomService: LabRandomService) {}
  ngOnInit() {
    this.randomService
      .getRandomStream()
      .subscribe(data => (this.randomValue = data));
  }
}
