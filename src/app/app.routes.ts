import { Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginGuard } from './guards/permiso.service';

export const routes: Routes = [
    { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },

];
