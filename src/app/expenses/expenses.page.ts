import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NavController } from "@ionic/angular";
import { ExpensesService } from "./expenses.service";
import { Storage } from "@ionic/storage";
import { userInfo } from "os";
@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.page.html",
  styleUrls: ["./expenses.page.scss"]
})
export class ExpensesPage implements OnInit {
  expenses: Observable<any>;
  company = null;
  user = null;
  constructor(
    private expensesService: ExpensesService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.user = this.storage.get("user").then(result => {
      this.company = result.company;
      this.expenses = this.expensesService.expenses(this.company);
    });
  }

  ngOnInit() {}
}
