import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from "./logout-button/logout-button.component";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    LogoutButtonComponent
  ],
  exports: [
    LogoutButtonComponent,
    RouterModule
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {
}
