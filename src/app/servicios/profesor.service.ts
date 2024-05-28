import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private authURL = "https://quindianoback.onrender.com/api/clientes";

  constructor(private http: HttpClient) { }

  public eliminarEstudianteCurso(codigoEstudiante: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.authURL}/eliminar-estudiante-curso/${codigoEstudiante}`);
  }

  public listarEstudiantesCurso(codigoProfesor: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listar-estudiantes/${codigoProfesor}`);
  }

}
