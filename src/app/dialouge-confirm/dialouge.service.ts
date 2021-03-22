import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialougeConfirmComponent } from './dialouge-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg){
   return this.dialog.open(DialougeConfirmComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "250px" },
      data :{
        message : msg
      }
    });
  }
}