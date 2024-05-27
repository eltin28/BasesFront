import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCursoDTO } from '../../dto/item-curso-dto';
import { TokenService } from '../../servicios/token.service';
import { CurseServiceService } from '../../servicios/curse-service.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  resultados: ItemCursoDTO[];

  constructor(private tokenService: TokenService, private curseService: CurseServiceService){
    this.resultados = [];
  }

  public listarNegocios(){
    const codigo = this.tokenService.getAllTokenData().id;
    this.curseService.listarCursos(codigo).subscribe({
        next: (data) => {
            this.resultados = data.respuesta;
        },
        error: (error) => {
            console.error(error);
        }
    });
}
}
