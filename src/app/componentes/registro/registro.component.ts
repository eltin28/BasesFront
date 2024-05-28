import { Component, OnInit, Inject } from '@angular/core';
import { RegistroUsuarioDTO } from '../../dto/registro-usuario-dto';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { EstudianteService } from '../../servicios/estudiante.service';
import { ProfesorService } from '../../servicios/profesor.service';
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../dto/alerta';
import { LoginDTO } from '../../dto/login-dto';
import { TokenService } from '../../servicios/token.service';
import { error } from 'console';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, AlertaComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  container: HTMLElement | null = null;
  registroClienteDTO: RegistroUsuarioDTO;
  loginDTO: LoginDTO;
  archivos!:FileList;
  showPassword = false;
  activeIcon = 'fa-eye';
  alerta!:Alerta;
  rolSeleccionado: string = "";

  constructor(@Inject(DOCUMENT) private document: Document, private authServiceProfesor: ProfesorService, private authServiceEstudiante: EstudianteService, private tokenService: TokenService) {
    this.registroClienteDTO = new RegistroUsuarioDTO();
    this.loginDTO = new LoginDTO();
  }

  public sonIguales(): boolean {
    return this.registroClienteDTO.password == this.registroClienteDTO.confirmaPassword;
  }

  public registrar() {
    if(this.rolSeleccionado = "PROFESOR"){
      this.authServiceProfesor.registrarProfesor(this.registroClienteDTO).subscribe({
        next: (data) => {
          this.alerta = new Alerta(data.respuesta, "success");
        },
        error: (error) => {
          this.alerta = new Alerta(error.error.respuesta, "danger");
        }
      });
    }else if (this.rolSeleccionado = "ESTUDIANTE"){
      this.authServiceEstudiante.registrarEstudiante(this.registroClienteDTO).subscribe({
        next: (data) => {
          this.alerta = new Alerta(data.respuesta, "success");
        },
        error: (error) => {
          this.alerta = new Alerta(error.error.respuesta, "danger");
        }
      });
    }else{
      console.log("Seleccione un rol")
    }
  }

  ngOnInit(): void {
    this.container = this.document.getElementById('container');

    if (this.container) {
      const signUpButton = this.document.getElementById('signUp');
      const signInButton = this.document.getElementById('signIn');

      if (signUpButton && signInButton) {
        signUpButton.addEventListener('click', () => this.togglePanel('right'));
        signInButton.addEventListener('click', () => this.togglePanel('left'));
      }
    }
  }

  togglePanel(direction: 'left' | 'right'): void {
    if (!this.container) {
      return;
    }
    this.container.classList.toggle('right-panel-active');
  }

  togglePasswordVisibility() {
    this.showPassword =!this.showPassword;
    this.activeIcon = this.activeIcon === 'fa-eye'? 'fa-eye-slash' : 'fa-eye';
  }

  toggleCampVisibility(event: Event) {
    const target = event.target as HTMLSelectElement; // Asigna explícitamente el tipo
    this.rolSeleccionado = target.value;
  }

  //__________________________________________________________________________________________________________________
  
  public login() {
  //     this.authService.loginCliente(this.loginDTO).subscribe({
  //       next: data => {
  //         this.tokenService.login(data.respuesta.token);
  //       },
  //       error: error => {
  //         this.alerta = new Alerta(error.error.respuesta, "danger" );
  //       }
  //       });
  // }
  console.log(this.loginDTO);
}
}