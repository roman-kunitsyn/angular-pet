import { Injectable } from "@angular/core";
import { Observable, interval } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LabRandomService {
  private _randomStream: Observable<number>;
  constructor() {}
  generateRandomValue(): number {
    return Math.random() * 200;
  }
  getRandomStream(): Observable<number> {
    if (!this._randomStream) {
      this._randomStream = interval(1000).pipe(
        map(x => {
          return this.generateRandomValue();
        })
      );
    }
    return this._randomStream;
  }
}
