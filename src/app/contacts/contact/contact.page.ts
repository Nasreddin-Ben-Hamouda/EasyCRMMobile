import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Observable } from "rxjs";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"]
})
export class ContactPage implements OnInit {
  contact_id = null;
  contact: any;
  constructor(
    private contactsService: ContactsService,
    private callNumber: CallNumber,
    public activatedRoute: ActivatedRoute
  ) {
    this.contact_id = this.activatedRoute.snapshot.paramMap.get("contact");
    this.contactsService.contact(this.contact_id).subscribe(result => {
      this.contact = result;
    });
  }

  call(number) {
    this.callNumber
      .callNumber(number, true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }
  ngOnInit() {}
}
