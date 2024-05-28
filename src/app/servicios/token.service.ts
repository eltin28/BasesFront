import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from "buffer";
import { UserInfoDTO } from '../dto/user-info-dto';

const TOKEN_KEY = "hlu60kkasdn32jiofh0c31z64m3z1wkp7vf";

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  constructor(private router: Router) { }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

//   Para verificar en cualquier momento si estamos logueados o no
  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  //   Para verificar en cualquier momento si estamos logueados como estudiantes
  public isLoggedEstudent(logged: boolean): boolean {

    const rol = this.getAllTokenData().rol;
    if (logged){
      if (rol == "ESTUDIANTE") {
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  //   Para verificar en cualquier momento si estamos logueados como estudiantes
  public isLoggedMaster(logged: boolean): boolean {

    const rol = this.getAllTokenData().rol;
    if (logged){
      if (rol == "PROFESOR") {
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }  
  }

  public login(token: string) {
    this.setToken(token);
    this.router.navigate(["/cursos"]).then(() => {
      window.location.reload();
    });
  }

  public logout() {
    window.sessionStorage.clear();
    this.router.navigate(["/registro"]).then(() => {
      window.location.reload();
    })
  }

  public decodePayload(token: string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }
  
  public getAllTokenData(): UserInfoDTO {
    const token = this.getToken(); // Asume que getToken devuelve el token JWT
    if (token) {
      const decodedValues = this.decodePayload(token); // Usa decodePayload para obtener el payload decodificado
      return new UserInfoDTO(
        decodedValues.id, 
        decodedValues.nombre,
        decodedValues.apellidos, 
        decodedValues.rol, 
        decodedValues.email,
        decodedValues.materia,
        decodedValues.semestre
      );
    }
    return new UserInfoDTO('', '', '', ''); // Retorna un nuevo UserInfoDTO vacío si no hay token
  }
  
}