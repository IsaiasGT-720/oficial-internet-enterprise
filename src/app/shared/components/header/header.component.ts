import { Component } from '@angular/core';

@Component({
  selector: 'fmt-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  closeMenu(): void { this.menuOpen = false; }
  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
}