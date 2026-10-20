import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InternetPlan, PlanOffer } from '../../core/models/site.models';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'fmt-plans',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent implements OnInit {
  plans: InternetPlan[] = [];

  constructor(private readonly data: SiteDataService) {}

  ngOnInit(): void {
    this.plans = this.data.getPlans();
  }

  choose(zone: InternetPlan, offer: PlanOffer): void {
    const message = encodeURIComponent(
      `Hola FM T&T, quiero consultar el plan ${offer.title} de la zona ${zone.area}.`
    );
    const url = `https://wa.me/573207837849?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}