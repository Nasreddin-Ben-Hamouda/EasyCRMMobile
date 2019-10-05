import { Component, OnInit } from "@angular/core";
import { EstimatesService } from "../estimates.service";
import { ActivatedRoute } from "@angular/router";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { AlertController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: "app-estimate",
  templateUrl: "./estimate.page.html",
  styleUrls: ["./estimate.page.scss"]
})
export class EstimatePage implements OnInit {
  estimate = null;
  estimate_id = null;
  fileTransfer: FileTransferObject;
  constructor(
    private estimatesService: EstimatesService,
    public activatedRoute: ActivatedRoute,
    public document: DocumentViewer,
    public file: File,
    private transfer: FileTransfer,
    private alertCtrl: AlertController,
    private fileOpener: FileOpener,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.estimate_id = this.activatedRoute.snapshot.paramMap.get("estimate");
    this.estimatesService.estimate(this.estimate_id).subscribe(result => {
      this.estimate = result;
    });
  }


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
      this.fileOpener.open(url, 'application/pdf');
    });
  }
}
