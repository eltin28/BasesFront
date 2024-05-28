import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../servicios/token.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  nombre = ''; 
  title = 'Unilocal';
  isLogged = false;
  isLoggedMaster = false;
  isLoggedEstudent = false;
  mostrarMenu = false;

  toggleMenu() {
    this.mostrarMenu = this.mostrarMenu === false?true:false;
  }

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {

    this.isLoggedEstudent = this.tokenService.isLoggedEstudent(this.tokenService.isLogged())
    if (this.isLoggedEstudent) {
      this.nombre = this.tokenService.getAllTokenData().nombre;
    }
    this.isLoggedMaster = this.tokenService.isLoggedMaster(this.tokenService.isLogged())
    if (this.isLoggedMaster) {
      this.nombre = this.tokenService.getAllTokenData().nombre;
    }
  }

  public logout() {
    this.tokenService.logout();
  }

}
