import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';
import { LoginComponent } from './autenticacion/components/login/login.component';


const rutas: Routes = [
  {path: 'autenticacion/login', component: LoginComponent },
  { 
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]
  },
  { 
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then((m) => m.AlumnosModule),
    canActivate: [AutenticacionGuard]
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component:InicioComponent, canActivate: [AutenticacionGuard]},

  {path: '**', component:PaginaNoEncontradaComponent},
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
