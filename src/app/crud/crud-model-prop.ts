import { CrudModel } from "./crud-model";

export class CrudModelProp {
  key: string;
  type: string;
  model?: null | CrudModel = null;
  default?: string;
  require?: [boolean, string];
}

export class CrudModelPropString extends CrudModelProp {
  enum?: [[string], string];
  regExp?: [RegExp, string];
  minLength?: [number, string];
  maxLength?: [number, string];
}

export class CrudModelPropNumber extends CrudModelProp {
  min?: [number, string];
  max?: [number, string];
}

export class CrudModelPropDate extends CrudModelProp {
  min?: [Date, string];
  max?: [Date, string];
}

export class CrudModelPropBoolean extends CrudModelProp {}

export class CrudModelPropObject extends CrudModelProp {
  model: CrudModel;
}

export class CrudModelPropArray extends CrudModelProp {
  model: CrudModel;
  minLength?: [number, string];
  maxLength?: [number, string];
}
