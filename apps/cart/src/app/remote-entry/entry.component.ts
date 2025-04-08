import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartComponent } from '../components/cart/cart.component';

@Component({
  imports: [CommonModule, CartComponent],
  selector: 'app-cart-entry',
  template: `<app-cart></app-cart>`,
})
export class RemoteEntryComponent {}
