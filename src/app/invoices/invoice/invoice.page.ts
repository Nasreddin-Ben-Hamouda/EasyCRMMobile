import { Component, OnInit } from "@angular/core";
import { InvoicesService } from "../invoices.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { AlertController } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.page.html",
  styleUrls: ["./invoice.page.scss"]
})
export class InvoicePage implements OnInit {
  invoice = null;
  invoice_id = null;
  fileTransfer: FileTransferObject;
  constructor(
    private invoicesService: InvoicesService,
    public activatedRoute: ActivatedRoute,
    public document: DocumentViewer,
    public file: File,
    private transfer: FileTransfer,
    private alertCtrl: AlertController,
    private fileOpener: FileOpener,
    private platform: Platform
  ) {
    this.fileTransfer = this.transfer.create();

  }

  ngOnInit() {
    this.invoice_id = this.activatedRoute.snapshot.paramMap.get("invoice");
    this.invoicesService.invoice(this.invoice_id).subscribe(result => {
      this.invoice = result;
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
    transfer.download("http://127.0.0.1:8000/"+fileUrl, path + 'invoice.pdf').then(entry => {
      let url = entry.toURL();
      this.fileOpener.open(url, 'application/pdf');
    });
  }
}
