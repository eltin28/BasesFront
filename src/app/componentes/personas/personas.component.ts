import { Component } from '@angular/core';
import { ItemEstudianteDTO } from '../../dto/item-estudiante-dto';
import { TokenService } from '../../servicios/token.service';
import { ProfesorService } from '../../servicios/profesor.service';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {

  estudiantes: ItemEstudianteDTO[];
  seleccionados: ItemEstudianteDTO[];
  textoBtnEliminar : string;

  constructor(private profesorService: ProfesorService, private tokenService: TokenService) {
      this.estudiantes = [];
      this.seleccionados = []; 
      this.textoBtnEliminar = ''; 
      this.listarEstudiantes();
  }

  public listarEstudiantes(){
      const codigoProfesor = this.tokenService.getAllTokenData().id;
      this.profesorService.listarEstudiantesCurso(codigoProfesor).subscribe({
          next: (data) => {
              this.estudiantes = data.respuesta;
          },
          error: (error) => {
              console.error(error);
          }
      });
  }

  public seleccionar(producto: ItemEstudianteDTO, estado: boolean) {
    if (estado) {
        this.seleccionados.push(producto);
    } else {
        this.seleccionados.splice( this.seleccionados.indexOf(producto), 1 );
    }
    this.actualizarMensaje();
}


  private actualizarMensaje() {
      const tam = this.seleccionados.length;

      if (tam != 0) {
          if (tam == 1) {
              this.textoBtnEliminar = "1 elemento";
          } else {
              this.textoBtnEliminar = tam + " elementos";
          }
      } else {
      
      this.textoBtnEliminar = "";
      }
  }

  public borrarEstudiantes() {
      this.seleccionados.forEach(n => {
          this.profesorService.eliminarEstudianteCurso(n.id);
          this.estudiantes = this.estudiantes.filter(estudiante => estudiante.id !== n.id);
      });
      
      this.seleccionados = [];
      this.actualizarMensaje();
  }
}
