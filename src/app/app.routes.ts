import { Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginGuard } from './guards/permiso.service';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { CrearExamenComponent } from './componentes/crear-examen/crear-examen.component';
import { CrearExamenCuestionarioComponent } from './componentes/crear-examen-cuestionario/crear-examen-cuestionario.component';
import { CrearExamenPreguntaComponent } from './componentes/crear-examen-pregunta/crear-examen-pregunta.component';
import { CursoComponent } from './componentes/curso/curso.component';

export const routes: Routes = [
    // { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    { path: '', component: RegistroComponent },
    { path: 'cursos', component: CursosComponent},
    { path: 'crear-examen', component: CrearExamenComponent},
    { path: 'crear-examen/cuestionario', component:CrearExamenCuestionarioComponent},
    { path: 'crear-examen/pregunta', component:CrearExamenPreguntaComponent},
    { path: 'curso', component: CursoComponent}

];
