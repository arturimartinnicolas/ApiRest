import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { BooleanATextoPipe } from '../pipes/boolean-a-texto.pipe';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosInicioComponent } from './components/cursos-inicio/cursos-inicio.component';


@NgModule({
  declarations: [
    AgregarCursoComponent,
    EditarCursoComponent,
    ListaCursosComponent,
    BooleanATextoPipe,
    CursosInicioComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CursosModule { }
