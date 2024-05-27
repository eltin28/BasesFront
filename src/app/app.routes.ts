import { Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginGuard } from './guards/permiso.service';
import { CursosComponent } from './componentes/cursos/cursos.component';

export const routes: Routes = [
    // { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    { path: 'registro', component: RegistroComponent },
    { path: 'cursos', component: CursosComponent}

];
