import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from "../files/files.component";
import { NewFileComponent } from "./new-file.component";

const routes: Routes = [
  {
    path: "",
    component: NewFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewFileRoutingModule { }
