import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { NombreYApellidoPipe } from '../pipes/nombre-y-apellido.pipe';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnosInicioComponent } from './components/alumnos-inicio/alumnos-inicio.component';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AgregarAlumnoComponent,
    EditarAlumnoComponent,
    NombreYApellidoPipe,
    AlumnosInicioComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class AlumnosModule { }
