import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-add-incident-dialog',
  templateUrl: './add-incident-dialog.component.html',
  styleUrls: ['./add-incident-dialog.component.css'],
})
export class AddIncidentDialogComponent implements OnInit {
  incidentForm: FormGroup;

  constructor(
    private incidentService: IncidentService,
    private dialogRef: MatDialogRef<AddIncidentDialogComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initIncidentForm();
  }

  initIncidentForm(): void {
    this.incidentForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      status: false,
      steps: this.formBuilder.array([]),
    });
  }
  addIncident(): void {
    this.incidentService.addIncident(this.incidentForm.value);
    this.generatePdf(this.incidentForm.value);
    this.dialogRef.close('success');
  }
  addStep(): void {
    (this.incidentForm.get('steps') as FormArray).push(new FormControl(''));
  }
  closeDialog() {
    this.dialogRef.close();
  }
  dropStep(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.gSteps.controls,
      event.previousIndex,
      event.currentIndex
    );
    moveItemInArray(this.gSteps.value, event.previousIndex, event.currentIndex);
  }
  generatePdf(information) {
    let stepsHtml = '';
    information.steps.forEach((element, index) => {
      stepsHtml += `<p> step ${index + 1}: ${element}<p>`;
    });
    const doc = new jsPDF();
    doc.fromHTML(
      `<h3>Incident information</h3> <p>Title: ${
        information.title
      }</p> <p>description: ${information.description}</p><p>Status: ${
        information.solved ? 'Solved' : 'In process'
      }</p>${stepsHtml}`,
      10,
      10
    );
    doc.setProperties({ title: 'Incident Information' });
    doc.output('dataurlnewwindow');
  }
  get gSteps(): FormArray {
    return this.incidentForm.get('steps') as FormArray;
  }
}
