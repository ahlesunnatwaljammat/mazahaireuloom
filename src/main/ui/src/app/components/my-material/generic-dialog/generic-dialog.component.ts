import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-dialog',
  template: `
    <h2 mat-dialog-title>Delete all</h2>
    <mat-dialog-content>Are you sure?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
  styles: []
})
export class GenericDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}