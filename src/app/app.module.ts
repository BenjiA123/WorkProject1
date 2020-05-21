import { BrowserModule, HammerModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from "@angular/material/dialog";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { GridComponent } from "./grid/grid.component";
import {
  IgxGridModule,
  IgxCheckboxModule,
  IgxDatePickerModule,
} from "igniteui-angular";
import { PopUpComponent } from "./pop-up/pop-up.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, GridComponent, PopUpComponent],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
  ],
  entryComponents: [PopUpComponent],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
