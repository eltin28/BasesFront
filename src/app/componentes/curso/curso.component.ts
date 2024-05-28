import { Component } from '@angular/core';
import { ContenidoComponent } from '../contenido/contenido.component';
import { PersonasComponent } from '../personas/personas.component';

@Component({
    selector: 'app-curso',
    standalone: true,
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.css'],
    imports: [PersonasComponent, ContenidoComponent]
})
export class CursoComponent {
  activeTab = '';
  tabs = [
    { title: 'Contenido', component: ContenidoComponent },
    { title: 'Personas', component: PersonasComponent },
  ];

  constructor() {}

  changeTab(tabTitle: string): void {
    const tab = this.tabs.find(t => t.title === tabTitle);
    if (tab) {
      this.activeTab = tab.title;
    }
  }
}
