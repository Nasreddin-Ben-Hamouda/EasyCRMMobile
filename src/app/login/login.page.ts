import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { Storage } from "@ionic/storage";
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  loginForm = { email: "", password: "" };
  public user: any;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public api: LoginService,
    private alertCtrl: AlertController
  ) {
    this.storage.get("user").then(val => {
      if (val) {
        console.log(val);
        this.navCtrl.navigateForward("home", {
          animated: true,
          animationDirection: "forward"
        });
      }
    });
  }

  ngOnInit() {}
  goToRegister() {
    this.navCtrl.navigateRoot("register");
  }

  handleLogin() {
    this.api
      .post("http://127.0.0.1:8000/api/login", this.loginForm)
      .toPromise()
      .then(
        async res => {
          if (res["status"] == 200 && res["user"]) {
            console.log(res);
            let tmp = res["user"];
            this.user = {
              id: tmp.id,
              name: tmp.name,
              email: tmp.email,
              company: res["company"]
            };
            this.storage.set("user", this.user).then(async () => {
              this.navCtrl.navigateRoot("home", {
                animated: true,
                animationDirection: "forward"
              });
            });
          } else {
            let alert = await this.alertCtrl.create({
              header: "Alert",
              subHeader: "Subtitle",
              message: "wrong password and email.",
              buttons: ["OK"]
            });
            alert.present();
          }
        },
        async err => {
          let alert = await this.alertCtrl.create({
            header: "Alert",
            subHeader: "Subtitle",
            message: "Connection issue.",
            buttons: ["OK"]
          });
          alert.present();
        }
      );
  }
}
