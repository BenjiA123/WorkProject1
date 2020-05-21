import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  message = "You have added "

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {
   
  }
}
