import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';
import { APIS } from '../URL/apis';
import { RegistroUsuarioDTO } from '../dto/registro-usuario-dto';
import { LoginDTO } from '../dto/login-dto';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private authURL = APIS.profesorURL;

  constructor(private http: HttpClient) { }

  public eliminarEstudianteCurso(codigoEstudiante: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.authURL}/eliminar-estudiante-curso/${codigoEstudiante}`);
  }

  public listarEstudiantesCurso(codigoProfesor: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.authURL}/listar-estudiantes/${codigoProfesor}`);
  }

  public registrarProfesor(cliente: RegistroUsuarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}`, cliente);
  }

  public loginProfesor(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO)
  }

}
