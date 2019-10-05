import { Component, OnInit } from "@angular/core";
import { ExpensesService } from "../expenses.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { File } from "@ionic-native/file/ngx";
import { DocumentViewer } from "@ionic-native/document-viewer/ngx";
import { Platform } from '@ionic/angular';
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: "app-expense",
  templateUrl: "./expense.page.html",
  styleUrls: ["./expense.page.scss"]
})
export class ExpensePage implements OnInit {
  expense = null;
  expense_id = null;
  fileTransfer: FileTransferObject;
  constructor(
    private expensesService: ExpensesService,
    public activatedRoute: ActivatedRoute,
    public document: DocumentViewer,
    public file: File,
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
    private platform: Platform
    ) {}
    
    ngOnInit() {
      this.expense_id = this.activatedRoute.snapshot.paramMap.get("expense");
      this.expensesService.expense(this.expense_id).subscribe(result => {
        this.expense = result;
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
      // this.document.viewDocument(url, 'application/pdf', {});
      this.fileOpener.open(url, 'application/pdf');
    });
  }
}
