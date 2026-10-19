import { Component } from '@angular/core';

@Component({
  selector: 'fmt-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  activeSlide = 0;
  // IMÁGENES DEL HERO: reemplaza estas rutas por archivos propios dentro de public/images/hero/.
  // Ejemplos sugeridos: torre de telecomunicaciones rural, antena de radioenlace y paisaje rural conectado.
  readonly slides = [
    { image: '/images/hero/internet-rural-01.png', alt: 'Conectividad de internet en zonas rurales' },
    { image: '/images/hero/internet-rural-02.png', alt: 'Infraestructura de telecomunicaciones rural' },
    { image: '/images/hero/internet-rural-03.png', alt: 'Antena de conexión inalámbrica' }
  ];
  nextSlide(): void { this.activeSlide = (this.activeSlide + 1) % this.slides.length; }
  previousSlide(): void { this.activeSlide = (this.activeSlide + this.slides.length - 1) % this.slides.length; }
}