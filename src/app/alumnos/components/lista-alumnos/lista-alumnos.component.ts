import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { Observable } from 'rxjs';
import { AlumnoService } from '../../services/alumno.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Alumno[]>;

  
  columnas: string[] = ['dni','nombre','fechanacimiento', 'genero', 'acciones']

  constructor( private alumnoService: AlumnoService,private router: Router) { 
  }

  ngOnInit(): void {
    this.alumnos$ = this.alumnoService.obtenerAlumnos();
  }
  eliminarAlumno(id: number){
    this.alumnoService.eliminarAlumno(id);
  }

  editarAlumno(alumno: Alumno){
    let fechanac = new Date(alumno.fechanacimiento).toISOString().slice(0, 10);
    alumno.fechanacimiento = fechanac;
    this.router.navigate(['alumnos/editar', alumno]);
  }
}
