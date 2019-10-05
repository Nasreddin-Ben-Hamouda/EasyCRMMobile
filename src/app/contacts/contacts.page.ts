import { Component, OnInit } from "@angular/core";
import { ContactsService } from "./contacts.service";
import { Observable } from "rxjs";
import { Storage } from "@ionic/storage";
import { CallNumber } from "@ionic-native/call-number/ngx";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"]
})
export class ContactsPage implements OnInit {
  contacts: any;
  company_id = null;
  user: any;
  constructor(
    private contactsService: ContactsService,
    private storage: Storage,
    private callNumber: CallNumber
  ) {}

  ngOnInit() {
    console.log("contat");
    this.user = this.storage.get("user").then(result => {
      this.company_id = result.company;
      this.contacts = this.contactsService.contacts(this.company_id);
    });
  }
  call(number) {
    this.callNumber
      .callNumber(number, true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }
}
