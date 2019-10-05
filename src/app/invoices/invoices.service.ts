import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class InvoicesService {
  url = "http://127.0.0.1:8000/api/invoices/";
  singleUrl = "http://127.0.0.1:8000/api/invoice/";
  constructor(private http: HttpClient) {}

  invoices(company_id): Observable<any> {
    return this.http.get(this.url + company_id).pipe(
      map(results => {
        return results;
      })
    );
  }
  invoice(invoice_id): Observable<any> {
    return this.http.get(this.singleUrl + invoice_id).pipe(
      map(results => {
        return results;
      })
    );
  }
}
