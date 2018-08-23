import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CrudItem } from "./crud-item";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: "root" })
export class CrudService {
  private crudUrl = "api/crudList";

  private log(message) {
    console.log(message);
  }

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getCrudList(): Observable<CrudItem[]> {
    return this.http.get<CrudItem[]>(this.crudUrl).pipe(
      tap(items => this.log("fetched items")),
      catchError(this.handleError("getCrudList", []))
    );
  }

  getCrudItem(id: number): Observable<CrudItem> {
    const url = `${this.crudUrl}/${id}`;
    return this.http.get<CrudItem>(url).pipe(
      tap(crudItem => this.log(`fetched crudItem id=${id}`)),
      catchError(this.handleError<CrudItem>(`getCrudItem id=${id}`))
    );
  }

  createCrudItem(crudItem: CrudItem): Observable<CrudItem> {
    return this.http.post<CrudItem>(this.crudUrl, crudItem, httpOptions).pipe(
      tap((crudItem: CrudItem) => this.log(`added crudItem w/ id=${crudItem.id}`)),
      catchError(this.handleError<CrudItem>("createCrudItem"))
    );
  }

  readCrudItem(id: number): Observable<CrudItem> {
    const url = `${this.crudUrl}/${id}`;
    return this.http.get<CrudItem>(url).pipe(
      tap(crudItem => this.log(`fetched crudItem id=${id}`)),
      catchError(this.handleError<CrudItem>(`getCrudItem id=${id}`))
    );
  }

  updateCrudItem(crudItem: CrudItem): Observable<any> {
    return this.http.put(this.crudUrl, crudItem, httpOptions).pipe(
      tap(_ => this.log(`updated crudItem id=${crudItem.id}`)),
      catchError(this.handleError<any>("updateCrudItem"))
    );
  }

  deleteCrudItem(crudItem: CrudItem | number): Observable<CrudItem> {
    const id = typeof crudItem === "number" ? crudItem : crudItem.id;
    const url = `${this.crudUrl}/${id}`;

    return this.http.delete<CrudItem>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted crudItem id=${id}`)),
      catchError(this.handleError<CrudItem>("deleteCrudItem"))
    );
  }

  searchCrudItems(term: string): Observable<CrudItem[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<CrudItem[]>(`${this.crudUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found crudItemes matching "${term}"`)),
      catchError(this.handleError<CrudItem[]>("searchCrudItems", []))
    );
  }
}
