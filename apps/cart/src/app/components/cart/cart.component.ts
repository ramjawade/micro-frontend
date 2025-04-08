import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 2,
      selected: false 
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      quantity: 1,
      selected: false
    },
    {
      id: 3,
      name: 'Product 3',
      price: 150,
      quantity: 3,
      selected: false 
    }
  ]

  hasSelectedProducts(): boolean {
    return this.cartProducts.some(product => product.selected);
  }

  getSelectedProducts(): any[] {
    return this.cartProducts.filter(product => product.selected);
  }

  proceedToPayment(): void {
    const selectedProducts = this.cartProducts.filter(product => product.selected);
    if (selectedProducts.length === 0) {
      alert('Please select at least one product to proceed.');
      return;
    }
    console.log('Selected Products:', selectedProducts);
    // Add your payment logic here
  }
}
