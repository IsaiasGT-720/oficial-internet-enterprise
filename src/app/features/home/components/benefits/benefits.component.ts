import { Component } from '@angular/core';

@Component({
  selector: 'fmt-benefits',
  standalone: true,
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  readonly benefits = [
    { icon: '⌁', title: 'Conectividad rural', description: 'Alternativas para acercar internet a lugares donde otras opciones no llegan.' },
    { icon: '◇', title: 'Acompañamiento cercano', description: 'Orientación directa para encontrar una solución que se adapte a tus necesidades.' },
    { icon: '⌘', title: 'Tecnología integral', description: 'Internet, redes, seguridad y automatización desde un mismo aliado tecnológico.' }
  ];
}