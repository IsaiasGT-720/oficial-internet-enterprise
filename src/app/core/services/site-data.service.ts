import { Injectable } from '@angular/core';
import { CatalogProduct, InternetPlan } from '../models/site.models';

const DEFAULT_PLANS: InternetPlan[] = [
  {
    id: 'zone-01', zone: 'ZONA 01', area: 'SANTA ROSA DE OSOS, ENTRERRÍOS Y DON MATÍAS',
    setupLabel: 'Afiliación', setupPrice: 125000, theme: 'gold',
    offers: [
      { id: 'z1-5', title: '5 MEGAS', price: 75000, unit: 'al mes' },
      { id: 'z1-8', title: '8 MEGAS', price: 85000, unit: 'al mes' },
      { id: 'z1-10', title: '10 MEGAS', price: 125000, unit: 'al mes', note: 'Incluye TV: más de 500 canales, series y películas. + $50.000 por la instalación. Equipo en comodato.' }
    ]
  },
  {
    id: 'zone-02', zone: 'ZONA 02', area: 'CISNEROS Y SANTO DOMINGO',
    setupLabel: 'Afiliación', setupPrice: 150000, theme: 'violet',
    offers: [
      { id: 'z2-3', title: '3 MEGAS', price: 65000, unit: 'al mes' },
      { id: 'z2-5', title: '5 MEGAS', price: 85000, unit: 'al mes' },
      { id: 'z2-8', title: '8 MEGAS', price: 100000, unit: 'al mes' },
      { id: 'z2-10', title: '10 MEGAS', price: 125000, unit: 'al mes', note: 'Incluye TV: más de 500 canales, series y películas. + $50.000 por la instalación.' }
    ]
  },
  {
    id: 'zone-03', zone: 'ZONA 03', area: 'SAN PABLO, ARAGÓN Y LABORES',
    setupLabel: 'Instalación', setupPrice: 60000, theme: 'pink',
    offers: [
      { id: 'z3-net', title: 'INTERNET', price: 55000, unit: 'al mes' },
      { id: 'z3-net-tv', title: 'INTERNET + TV', price: 75000, unit: 'al mes' },
      { id: 'z3-tv', title: 'SOLO TV', price: 35000, unit: 'al mes' }
    ]
  },
  {
    id: 'zone-04', zone: 'ZONA 04', area: 'SAN JOSÉ DE LA MONTAÑA',
    setupLabel: 'Línea', contactLine: '+57 324 453 0266', theme: 'blue',
    offers: [
      { id: 'z4-tv', title: 'SOLO TV', price: 30000, unit: 'al mes' },
      { id: 'z4-net', title: 'INTERNET', price: 45000, unit: 'al mes' },
      { id: 'z4-net-tv', title: 'INTERNET + TV', price: 79000, unit: 'al mes' }
    ]
  }
];

const DEFAULT_PRODUCTS: CatalogProduct[] = [
  { id: 'camera', title: 'Cámaras de seguridad', description: 'Soluciones de videovigilancia para hogares, fincas y negocios.', category: 'Seguridad', image: '/images/products/camara-seguridad.webp' },
  { id: 'ubiquiti', title: 'Antenas de radioenlace UBIQUITI', description: 'Conectividad inalámbrica para enlazar puntos y zonas rurales.', category: 'Conectividad', image: '/images/products/antena-ubiquiti.webp' },
  { id: 'data', title: 'Redes de datos', description: 'Instalación y organización de infraestructura de red y cableado.', category: 'Redes', image: '/images/products/redes-datos.webp' },
  { id: 'electric', title: 'Redes eléctricas', description: 'Soluciones de instalación y distribución eléctrica.', category: 'Electricidad', image: '/images/products/redes-electricas.webp' },
  { id: 'smart', title: 'Automatización y domótica', description: 'Tecnología para controlar y automatizar espacios.', category: 'Automatización', image: '/images/products/domotica.webp' }
];

@Injectable({ providedIn: 'root' })
export class SiteDataService {
  private readonly plansKey = 'fmtt-demo-plans-v1';
  private readonly productsKey = 'fmtt-demo-products-v1';

  getPlans(): InternetPlan[] {
    return this.read<InternetPlan[]>(this.plansKey) ?? structuredClone(DEFAULT_PLANS);
  }
  savePlans(plans: InternetPlan[]): void {
    localStorage.setItem(this.plansKey, JSON.stringify(plans));
  }
  getProducts(): CatalogProduct[] {
    return this.read<CatalogProduct[]>(this.productsKey) ?? structuredClone(DEFAULT_PRODUCTS);
  }
  saveProducts(products: CatalogProduct[]): void {
    localStorage.setItem(this.productsKey, JSON.stringify(products));
  }
  reset(): void {
    localStorage.removeItem(this.plansKey);
    localStorage.removeItem(this.productsKey);
  }
  private read<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) as T : null;
    } catch {
      return null;
    }
  }
}