import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Http, HttpModule } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(public http: HttpClient) {}

  url = "http://127.0.0.1:8000/api/register";
  
  static headersConfig() {
    let headers = new HttpHeaders();
    headers.append("Accept", "applications/json");
    headers.append("Content-Type", "application/json");
    return { headers };
  }

  post(endpoint: string, body: any) {
    return this.http.post(endpoint, body, RegisterService.headersConfig());
  }
}
