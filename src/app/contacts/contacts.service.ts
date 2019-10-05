import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  url = "http://127.0.0.1:8000/api/contacts/";
  singleUrl = "http://127.0.0.1:8000/api/contact/";
  constructor(private http: HttpClient) {}
  contacts(company_id): Observable<any> {
    return this.http.get(this.url + company_id).pipe(
      map(results => {
        return results;
      })
    );
  }
  contact(contact_id): Observable<any> {
    return this.http.get(this.singleUrl + contact_id).pipe(
      map(results => {
        return results;
      })
    );
  }
}
