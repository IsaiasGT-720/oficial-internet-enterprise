import { Component, OnInit } from '@angular/core';
import { CatalogProduct } from '../../core/models/site.models';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'fmt-catalog',
  standalone: true,
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent implements OnInit {
  products: CatalogProduct[] = [];
  constructor(private readonly data: SiteDataService) {}
  ngOnInit(): void { this.products = this.data.getProducts(); }
}