
import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
  ) {
    this.storage.get("user").then(val => {
      if (val) {
        console.log(val);
        this.navCtrl.navigateForward("home", {
          animated: true,
          animationDirection: "forward"
        });
      }else{
          this.navCtrl.navigateForward("login", {
            animated: true,
            animationDirection: "forward"
          });

      }
    });
  }

  ngOnInit() {}



}
