import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-verification-dialog',
  templateUrl: './verification-dialog.component.html',
  styleUrls: ['./verification-dialog.component.scss']
})
export class VerificationDialogComponent {

  constructor(private dialogRef: MatDialogRef<VerificationDialogComponent>){ } 
  onSubmit  (queryName: string){
    this.dialogRef.close(queryName); 
  }
}
