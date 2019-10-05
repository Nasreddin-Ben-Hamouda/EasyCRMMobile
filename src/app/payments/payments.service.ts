import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class PaymentsService {
  url = "http://127.0.0.1:8000/api/payments/";
  singleUrl = "http://127.0.0.1:8000/api/payment/";
  constructor(private http: HttpClient) {}

  payments(company_id): Observable<any> {
    return this.http.get(this.url + company_id).pipe(
      map(results => {
        return results;
      })
    );
  }
  payment(payment_id): Observable<any> {
    return this.http.get(this.singleUrl + payment_id).pipe(
      map(results => {
        return results;
      })
    );
  }
}
