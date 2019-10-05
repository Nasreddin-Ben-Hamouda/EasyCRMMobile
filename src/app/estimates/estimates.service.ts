import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class EstimatesService {
  url = "http://127.0.0.1:8000/api/estimates/";
  singleUrl = "http://127.0.0.1:8000/api/estimate/";
  constructor(private http: HttpClient) {}

  estimates(company_id): Observable<any> {
    return this.http.get(this.url + company_id).pipe(
      map(results => {
        return results;
      })
    );
  }
  estimate(estimate_id): Observable<any> {
    return this.http.get(this.singleUrl + estimate_id).pipe(
      map(results => {
        return results;
      })
    );
  }
}
