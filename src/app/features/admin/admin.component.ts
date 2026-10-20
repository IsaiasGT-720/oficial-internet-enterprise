import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CatalogProduct, InternetPlan, PlanOffer } from '../../core/models/site.models';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'fmt-admin',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  authenticated = false;
  password = '';
  loginError = '';
  plans: InternetPlan[] = [];
  products: CatalogProduct[] = [];
  activeTab: 'plans' | 'products' = 'plans';
  message = '';
  // CAMBIA ESTA CLAVE SOLO PARA LA DEMOSTRACIÓN. No es autenticación segura: el frontend se puede inspeccionar.
  private readonly demoPassword = 'FMAdminSite01';

  constructor(private readonly data: SiteDataService) {}
  ngOnInit(): void {
    this.plans = this.data.getPlans();
    this.products = this.data.getProducts();
  }
  login(): void {
    if (this.password === this.demoPassword) {
      this.authenticated = true;
      this.loginError = '';
    } else {
      this.loginError = 'La contraseña no coincide.';
    }
  }
  savePlans(): void {
    this.data.savePlans(this.plans);
    this.message = 'Tarifas guardadas en este navegador.';
    setTimeout(() => this.message = '', 3000);
  }
  saveProducts(): void {
    this.data.saveProducts(this.products);
    this.message = 'Catálogo guardado en este navegador.';
    setTimeout(() => this.message = '', 3000);
  }
  addProduct(): void {
    this.products.push({ id: 'product-' + Date.now(), title: 'Nuevo producto', description: 'Escribe la descripción del producto.', category: 'Categoría', image: '/images/products/nuevo-producto.jpg' });
  }
  removeProduct(index: number): void { this.products.splice(index, 1); }
  addOffer(plan: InternetPlan): void {
    plan.offers.push({ id: 'offer-' + Date.now(), title: 'NUEVO PLAN', price: 0, unit: 'al mes' });
  }
  removeOffer(plan: InternetPlan, index: number): void { plan.offers.splice(index, 1); }
  resetDemo(): void {
    this.data.reset();
    this.plans = this.data.getPlans();
    this.products = this.data.getProducts();
    this.message = 'Datos de demostración restaurados.';
    setTimeout(() => this.message = '', 3000);
  }
  trackPlan(_index: number, plan: InternetPlan): string { return plan.id; }
  trackOffer(_index: number, offer: PlanOffer): string { return offer.id; }
}