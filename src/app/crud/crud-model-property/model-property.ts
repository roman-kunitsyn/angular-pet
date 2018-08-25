export class ModelProp {
    key: string;
    type: string;
    require: [boolean, string];
}
export class ModelPropString {
    key: string;
    type: string;
    default: string;
    required: [boolean, string];
    enum: [[string], string];
    regExp: [RegExp, string];
    minLength: [number, string];
    maxLength: [number, string];
}
export class ModelPropNumber {
    key: string;
    type: string;
    default: number;
    required: [boolean, string];
    min: [number, string];
    max: [number, string];
}
export class ModelPropDate {
    key: string;
    type: string;
    default: Date;
    required: [boolean, string];
    min: [Date, string];
    max: [Date, string];
}
export class ModelPropBoolean {
    key: string;
    type: string;
    default: boolean;
    required: [boolean, string];
}
export class ModelPropObject {
    key: string;
    type: string;
    model: string;
    required: [boolean, string];
}
export class ModelPropArray {
    key: string;
    type: string;
    model: string;
    required: [boolean, string];
    minLength: [number, string];
    maxLength: [number, string];
}
