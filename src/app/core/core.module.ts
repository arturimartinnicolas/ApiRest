import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SesionService } from './services/sesion.service';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    SesionService
  ],
  exports: [
    MaterialModule,
  
  ]
})
export class CoreModule { }
