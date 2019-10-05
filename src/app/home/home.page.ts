import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private nav: NavController, private storage: Storage) {
    this.storage.get("user").then(val => {
      if (val) {
        console.log(val);
      }
    });
  }

  allItems() {
    this.nav.navigateForward("/items");
  }
  allInvoices() {
    this.nav.navigateForward("/invoices", {
      animated: true,
      animationDirection: "forward"
    });
  }
  allContacts() {
    this.nav.navigateForward("/contacts", {
      animated: true,
      animationDirection: "forward"
    });
  }
  allEstimates() {
    this.nav.navigateForward("/estimates", {
      animated: true,
      animationDirection: "forward"
    });
  }
  allExpense() {
    this.nav.navigateForward("/expenses", {
      animated: true,
      animationDirection: "forward"
    });
  }
  allPayment() {
    this.nav.navigateForward("/payments", {
      animated: true,
      animationDirection: "forward"
    });
  }
  logout() {
    this.storage.clear();
    this.nav.navigateForward("/login");
  }
}
