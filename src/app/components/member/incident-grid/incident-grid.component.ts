import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IncidentService } from 'src/app/services/incident.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { AddIncidentDialogComponent } from '../add-incident-dialog/add-incident-dialog.component';
import { IncidentDetailsDialogComponent } from '../incident-details-dialog/incident-details-dialog.component';
import { Incident } from 'src/app/interfaces/Incident.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

// ავტორი, დამატების თარიღი, მოგვარებულია თუ არა

@Component({
  selector: 'app-incident-grid',
  templateUrl: './incident-grid.component.html',
  styleUrls: ['./incident-grid.component.css'],
})
export class IncidentGridComponent implements OnInit {
  filterControl = new FormControl();
  displayedColumns: string[] = ['createDate', 'author', 'status'];
  dataSource: MatTableDataSource<any>;
  constructor(
    private incidentService: IncidentService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.initTable(this.incidents);
    this.filterControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value: string) => {
        this.initTable(this.incidentService.filterIncidents(value));
      });
  }
  addIncident(): void {
    const dialog = this.dialog.open(AddIncidentDialogComponent, {
      width: '700px',
      maxHeight: '80vh',
      disableClose: true,
    });
    dialog.afterClosed().subscribe((result: string) => {
      if (result === 'success') {
        this.initTable(this.incidentService.getIncidents());
        this.snackBar.open('Incident Successfully Added', 'Ok', {
          panelClass: 'snackbar',
          duration: 3000
        });
      }
    });
  }
  details(incident): void {
    this.dialog.open(IncidentDetailsDialogComponent, {
      width: '500px',
      data: incident
    });
  }
  initTable(tableSourse): void {
    this.dataSource = new MatTableDataSource(tableSourse);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  changeIncidentStatus(incident: Incident): void {
    this.incidentService.changeIncidentStatus(incident.id);
    this.initTable(this.incidents);
  }
  get incidents(): Incident[] {
    return this.incidentService.getIncidents();
  }
}
