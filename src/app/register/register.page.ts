import { Component, OnInit } from "@angular/core";
import { RegisterService } from "./register.service";
import { Storage } from "@ionic/storage";
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  registerForm = { name: "", email: "", password: "" };
  public user: any;

  constructor(
    public navCtrl: NavController,
    private storage: Storage,
    public api: RegisterService,
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
 

  handleRegister() {
    console.log(this.registerForm)
    this.api
      .post("http://127.0.0.1:8000/api/register", this.registerForm)
      .toPromise()
      .then(
        async res => {
          if (res["status"] == 200 && res["message"]) {
            console.log(res);
            let alert = await this.alertCtrl.create({
              header: 'Confirm!',
              message: 'Message <strong>'+res["message"]+'</strong>!!!',
              buttons: [
                 {
                  text: 'Okay',
                  handler: () => {
                    this.navCtrl.navigateRoot("login", {
                      animated: true,
                      animationDirection: "forward"
                    });
                  }
                }
              ]});

              await alert.present();
            
               
          } else if(res["status"] == 100 && res["message"]) {
            let alert = await this.alertCtrl.create({
              header: "Alert",
              message: res["message"],
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
