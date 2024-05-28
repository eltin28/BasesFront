import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroUsuarioDTO } from '../dto/registro-usuario-dto';
import { LoginDTO } from '../dto/login-dto';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { APIS } from '../URL/apis';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private authURL = APIS.estudianteURL;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public registrarEstudiante(cliente: RegistroUsuarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}`, cliente);
  }

  public loginEstudiante(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO)
  }

}