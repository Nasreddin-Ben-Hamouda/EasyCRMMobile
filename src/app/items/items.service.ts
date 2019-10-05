import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
export enum SearchType {
  all = "",
  items = "items"
}
@Injectable({
  providedIn: "root"
})
export class ItemsService {
  url = "http://127.0.0.1:8000/api/items/";
  constructor(private http: HttpClient) {}
  items(company): Observable<any> {
    return this.http.get(this.url + company).pipe(
      map(results => {
        return results;
      })
    );
  }

  getItem() {}
}
