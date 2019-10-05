import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ExpensesService {
  url = "http://127.0.0.1:8000/api/expenses/";
  singleUrl = "http://127.0.0.1:8000/api/expense/";
  constructor(private http: HttpClient) {}

  expenses(company_id): Observable<any> {
    return this.http.get(this.url + company_id).pipe(
      map(results => {
        return results;
      })
    );
  }
  expense(expense_id): Observable<any> {
    return this.http.get(this.singleUrl + expense_id).pipe(
      map(results => {
        return results;
      })
    );
  }
}
