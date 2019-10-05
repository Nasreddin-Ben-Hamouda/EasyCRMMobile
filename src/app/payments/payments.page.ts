import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NavController } from "@ionic/angular";
import { PaymentsService } from "./payments.service";
import { Storage } from "@ionic/storage";
import { userInfo } from "os";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
@Component({
  selector: "app-payments",
  templateUrl: "./payments.page.html",
  styleUrls: ["./payments.page.scss"]
})
export class PaymentsPage implements OnInit {
  payments: Observable<any>;
  company = null;
  user = null;
  transfer: any;
  constructor(
    private paymentsService: PaymentsService,
    private navCtrl: NavController,
    private storage: Storage,
    public document: DocumentViewer,
    public file: File,
    private fileOpener: FileOpener,
    public fileTransfer: FileTransfer,
    public platform: Platform
  ) {
    this.user = this.storage.get("user").then(result => {
      this.company = result.company;
      this.payments = this.paymentsService.payments(this.company);
    });
  }

  ngOnInit() {}
  downloadPdf(fileUrl){
    const transfer = this.transfer.create();
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }
    transfer.download("http://127.0.0.1:8000/"+fileUrl, path + 'myFile.pdf').then(entry => {
      let url = entry.toURL();
      // this.document.viewDocument(url, 'application/pdf', {});
      this.fileOpener.open(url, 'application/pdf');
    });
  }
}
