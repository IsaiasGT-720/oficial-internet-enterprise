import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InternetPlan, PlanOffer } from '../../core/models/site.models';
import { SiteDataService } from '../../core/services/site-data.service';

@Component({
  selector: 'fmt-plans',
  standalone: true,
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent implements OnInit {
  plans: InternetPlan[] = [];
  selected: { zone: InternetPlan; offer: PlanOffer } | null = null;
  form = { name: '', phone: '', location: '' };
  submitted = false;

  constructor(private readonly data: SiteDataService) {}
  ngOnInit(): void { this.plans = this.data.getPlans(); }
  choose(zone: InternetPlan, offer: PlanOffer): void {
    this.selected = { zone, offer };
    this.form = { name: '', phone: '', location: '' };
    this.submitted = false;
  }
  close(): void { this.selected = null; this.submitted = false; }
  confirmRequest(): void {
    if (this.form.name.trim() && this.form.phone.trim() && this.form.location.trim()) {
      this.submitted = true;
    }
  }
}