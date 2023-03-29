import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewFileRoutingModule } from './new-file-routing.module';
import { NewFileComponent } from './new-file.component';
import { DropZoneDirective } from "../../core/directives/drop-zone.directive";
import { ComponentsModule } from "../../core/components/components.module";

@NgModule({
  declarations: [
    NewFileComponent,
    DropZoneDirective,
  ],
  imports: [
    CommonModule,
    NewFileRoutingModule,
    ComponentsModule
  ],
})
export class NewFileModule { }
