import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NavController } from "@ionic/angular";
import { InvoicesService } from "./invoices.service";
import { Storage } from "@ionic/storage";
import { userInfo } from "os";
@Component({
  selector: "app-invoices",
  templateUrl: "./invoices.page.html",
  styleUrls: ["./invoices.page.scss"]
})
export class InvoicesPage implements OnInit {
  invoices: Observable<any>;
  company = null;
  user = null;
  constructor(
    private invoicesService: InvoicesService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.user = this.storage.get("user").then(result => {
      this.company = result.company;
      this.invoices = this.invoicesService.invoices(this.company);
    });
  }

  ngOnInit() {}
}
