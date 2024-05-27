import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroUsuarioDTO } from '../dto/registro-usuario-dto';
import { LoginDTO } from '../dto/login-dto';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "https://quindianoback.onrender.com/api/auth";

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public registrarCliente(cliente: RegistroUsuarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar-cliente`, cliente);
  }

  public loginCliente(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login-cliente`, loginDTO)
  }

}