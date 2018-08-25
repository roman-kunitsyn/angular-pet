import { Component, OnInit } from "@angular/core";
import { CrudModelProp, CrudModelPropObject } from "../crud-model-prop";

@Component({
  selector: "app-crud-model-property",
  templateUrl: "./crud-model-property.component.html",
  styleUrls: ["./crud-model-property.component.scss"]
})
export class CrudModelPropertyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let tmp: CrudModelPropObject = {
      key: "",
      type: "",
      model: {
        key: "",
        name: ""
      }
    };
    console.log(tmp);
  }
}
