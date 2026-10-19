import { Component } from '@angular/core';

@Component({
  selector: 'fmt-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly email = 'fmttassociatedgroup@gmail.com';
  readonly whatsapp = 'https://wa.me/573207837849';
  readonly telegram = 'https://t.me/';
}