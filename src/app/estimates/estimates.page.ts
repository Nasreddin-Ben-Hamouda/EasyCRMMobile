import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NavController } from "@ionic/angular";
import { EstimatesService } from "./estimates.service";
import { Storage } from "@ionic/storage";
import { userInfo } from "os";
@Component({
  selector: "app-estimates",
  templateUrl: "./estimates.page.html",
  styleUrls: ["./estimates.page.scss"]
})
export class EstimatesPage implements OnInit {
  estimates: Observable<any>;
  company = null;
  user = null;
  constructor(
    private estimatesService: EstimatesService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.user = this.storage.get("user").then(result => {
      this.company = result.company;
      this.estimates = this.estimatesService.estimates(this.company);
    });
  }

  ngOnInit() {}
}
