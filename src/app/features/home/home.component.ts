import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PlansComponent } from '../plans/plans.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'fmt-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HeroComponent, BenefitsComponent, ProjectsComponent, PlansComponent, CatalogComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}