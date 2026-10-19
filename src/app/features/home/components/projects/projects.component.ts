import { Component } from '@angular/core';

@Component({
  selector: 'fmt-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly items = [
    { number: '01', title: 'Internet rural', text: 'Conectividad para hogares, fincas y negocios.' },
    { number: '02', title: 'Redes y radioenlaces', text: 'Infraestructura para comunicar puntos distantes.' },
    { number: '03', title: 'Seguridad y domótica', text: 'Tecnología para vigilar y automatizar espacios.' }
  ];
}