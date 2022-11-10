import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from '../../services/alumno.service';
 

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css'],

})
export class EditarAlumnoComponent implements OnInit {

  model:any;
  id!: number;
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private alumnoService: AlumnoService,
    private router: Router
  ) 
  {
    this.formulario = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        dni: new FormControl(parametros.get('dni'), [Validators.required]),
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido')),
        edad: new FormControl(parametros.get('edad')),
        fechanacimiento: new FormControl({ disabled: false, value: parametros.get('fechanacimiento') }),
        genero: new FormControl({ disabled: false, value: parametros.get('genero') }),
        correo: new FormControl(parametros.get('correo')),
      });
    })
  }
  editarAlumno() {
    let p: Alumno = {
      id: this.id,
      dni: this.formulario.value.dni,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechanacimiento: this.formulario.value.fechanacimiento,
      genero: this.formulario.value.genero,
      correo: this.formulario.value.correo
    }

    this.alumnoService.editarAlumno(p);

    this.router.navigate(['/alumnos/lista-alumnos'])
  }

}
