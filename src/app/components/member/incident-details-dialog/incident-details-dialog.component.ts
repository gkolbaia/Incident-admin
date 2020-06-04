import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-incident-details-dialog',
  templateUrl: './incident-details-dialog.component.html',
  styleUrls: ['./incident-details-dialog.component.css']
})
export class IncidentDetailsDialogComponent implements OnInit {
  incident: any;
  constructor(
    public dialogRef: MatDialogRef<IncidentDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.incident = this.data;
  }

}
