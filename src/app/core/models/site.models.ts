export interface InternetPlan {
  id: string;
  zone: string;
  area: string;
  setupLabel: string;
  setupPrice?: number;
  contactLine?: string;
  offers: PlanOffer[];
  theme: 'gold' | 'violet' | 'pink' | 'blue';
}
export interface PlanOffer {
  id: string;
  title: string;
  price: number;
  unit?: string;
  note?: string;
}
export interface CatalogProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}