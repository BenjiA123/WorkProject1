import { Component, OnInit, ViewEncapsulation, Renderer2 } from "@angular/core";
import { employeesData } from "./localData";
import { MatDialog } from "@angular/material/dialog";
import { PopUpComponent } from "../pop-up/pop-up.component";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"],
})
export class GridComponent implements OnInit {
  public localData: any[];
  filter = false;
  page = false;
  sort = false;
  edit = false;
  
  constructor(private renderer: Renderer2, public dialog: MatDialog) {}
  message = "New feature Added";

  openPopUpComponent(data) {
    this.dialog.open(PopUpComponent, { data: { message: data } });
  }

  // toggleProp(val:boolean, message:string) {
  //   val = false
  //   if (val) {
  //     this.openPopUpComponent(`${message} Removed`);
  //     val = !val;
  //   } else {
  //     this.openPopUpComponent(`${message} Added`);
  //     val = !val;
  //   }
  // }
  ngOnInit() {
    this.localData = employeesData;
  }

  

  addSorting() {
    if (this.sort) {
      this.openPopUpComponent("Sorting Removed");
      this.sort = !this.sort;
    } else {
      this.openPopUpComponent("Sorting Added");
      this.sort = !this.sort;
    }
  }  

  addEditing() {
    if (this.edit) {
      this.openPopUpComponent("Editing Removed");
      this.edit = !this.edit;
    } else {
      this.openPopUpComponent("Editing Added");
      this.edit = !this.edit;
    }
  }
  addPaging() {
    if (this.page) {
      this.openPopUpComponent("Paging Removed");
      this.page = !this.page;
    } else {
      this.openPopUpComponent("Paging Added");
      this.page = !this.page;
    }
  }
  addFiltering() {
    if (this.filter) {
      this.openPopUpComponent("Filtering Removed");
      this.filter = !this.filter;
    } else {
      this.openPopUpComponent("Filtering Added");
      this.filter = !this.filter;
    }
  }

}
// jv slnvevnkjsnkjnwlsbvsl;fnjlnJ