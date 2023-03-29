import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FilesComponent } from './files.component';
import { FileSizePipe } from "../../core/pipes/files-size.pipe";
import { ComponentsModule } from "../../core/components/components.module";


@NgModule({
  declarations: [
    FilesComponent,
    FileSizePipe,
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    ComponentsModule
  ],
})
export class FilesModule { }
