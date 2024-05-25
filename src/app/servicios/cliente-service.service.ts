import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  private authURL = "https://quindianoback.onrender.com/api/clientes";

  constructor(private http: HttpClient) { }

  // public actualizarUsuario(actualizacionUsuario: ActualizacionUsuarioDTO): Observable<MensajeDTO> {
  //   return this.http.put<MensajeDTO>(`${this.authURL}/actualizar`, actualizacionUsuario);
  // }

  public eliminarUsuario(codigoUsuario: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.authURL}/eliminar/${codigoUsuario}`);
  }
}
