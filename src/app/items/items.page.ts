import { Component, OnInit } from "@angular/core";
import { ItemsService } from "./items.service";
import { Observable } from "rxjs";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-items",
  templateUrl: "./items.page.html",
  styleUrls: ["./items.page.scss"]
})
export class ItemsPage implements OnInit {
  items: Observable<any>;
  company_id: any;
  user: any;

  constructor(
    private itemsService: ItemsService,
    private modalController: ModalController,
    private storage: Storage
  ) {
    this.user = this.storage.get("user").then(result => {
      this.company_id = result.company;
      this.items = this.itemsService.items(this.company_id);
    });
  }
  ngOnInit() {}
}
