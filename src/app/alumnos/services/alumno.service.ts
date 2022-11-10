import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor(
    private http: HttpClient
  ) {
    
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${environment.api}/alumnos`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  obtenerAlumno(id: number): Observable<Alumno>{
    return this.http.get<Alumno>(`${environment.api}/alumnos/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    )
  }

  agregarAlumno(alumno: Alumno){
    this.http.post(`${environment.api}/alumnos/`, alumno, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  editarAlumno(alumno: Alumno){
    this.http.put<Alumno>(`${environment.api}/alumnos/${alumno.id}`, alumno).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }

  eliminarAlumno(id: number){
    this.http.delete<Alumno>(`${environment.api}/alumnos/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Registro eliminado");  
  }

  private manejarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}
