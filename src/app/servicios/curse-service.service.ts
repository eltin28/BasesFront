import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class CurseServiceService {

  private negociosURL = "https://quindianoback.onrender.com/api/publica";

  constructor(private http: HttpClient) { }

  // public crear(negocioNuevo: RegistroNegocioDTO): Observable<MensajeDTO> {
  //   return this.http.post<MensajeDTO>(`${this.negociosURL}/crear`, negocioNuevo);
  // }

  // public actualizar(actualizacionNegocio: ActualizacionNegocioDTO): Observable<MensajeDTO> {
  //   return this.http.put<MensajeDTO>(`${this.negociosURL}/actualizar`, actualizacionNegocio);
  // }
    
  // public obtener(codigoNegocio: string): Observable<MensajeDTO> {
  //   return this.http.get<MensajeDTO>(`${this.negociosURL}/obtener/${codigoNegocio}`);
  // }

  // public eliminar(codigoNegocio: string): Observable<MensajeDTO> {
  //   return this.http.delete<MensajeDTO>(`${this.negociosURL}/eliminar/${codigoNegocio}`);
  // }
  
  public listarCursos(codigo: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.negociosURL}/listar-negocios/${codigo}`);
  }

}
