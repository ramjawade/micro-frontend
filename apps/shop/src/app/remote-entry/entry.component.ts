import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShopComponent } from '../components/shop/shop.component';

@Component({
  imports: [CommonModule, ShopComponent],
  selector: 'app-shop-entry',
  template: `<app-shop></app-shop>`,
})
export class RemoteEntryComponent {}
