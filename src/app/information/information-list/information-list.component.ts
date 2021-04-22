import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DialogService } from 'src/app/dialouge-confirm/dialouge.service';
import { NotificationService } from 'src/app/dialouge-confirm/notification.service';
import { Information } from '../models/information';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.css']
})
export class InformationListComponent implements OnInit {
  showSpinner = true;
  _infoList: any;
  searchText;
  infoFullList: Information[] = [];
  constructor(public dialog: MatDialog, private infoService: InformationService, private _router: Router, private notificationService: NotificationService,
    private dialogService: DialogService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this. getData();
  }
  getData() {
    this.spinner.show();
    this.infoService.getInformation().subscribe(data => {
      this._infoList = data;
     // this.showSpinner = false;
     this.spinner.hide();
    });
  }
  deleteInfo(informationId: number) {
    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.infoService.deleteInformation(informationId).subscribe(() => {
            console.log('Deleted!');
          });
          this._infoList.splice(0, 1);
          this.notificationService.warn('! Deleted successfully');
        }
      });
  }

}
