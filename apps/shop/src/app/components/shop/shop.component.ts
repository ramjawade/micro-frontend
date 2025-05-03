import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '@micro-frontend/shared';

@Component({
  selector: 'app-shop',
  imports: [FormsModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  products = [
    { name: 'Product 1', subtitle: 'Category 1', category: 'category1' },
    { name: 'Product 2', subtitle: 'Category 2', category: 'category2' },
    { name: 'Product 3', subtitle: 'Category 3', category: 'category3' },
    { name: 'Product 4', subtitle: 'Category 1', category: 'category1' },
    { name: 'Product 5', subtitle: 'Category 2', category: 'category2' },
    { name: 'Product 6', subtitle: 'Category 3', category: 'category3' },
    { name: 'Product 7', subtitle: 'Category 1', category: 'category1' },
    { name: 'Product 8', subtitle: 'Category 2', category: 'category2' },
    { name: 'Product 9', subtitle: 'Category 3', category: 'category3' },
    { name: 'Product 10', subtitle: 'Category 1', category: 'category1' },
    { name: 'Product 11', subtitle: 'Category 2', category: 'category2' },
    { name: 'Product 12', subtitle: 'Category 3', category: 'category3' },
    { name: 'Product 13', subtitle: 'Category 1', category: 'category1' },
    { name: 'Product 14', subtitle: 'Category 2', category: 'category2' },
  ];

  filters: any=  {
    category1: false,
    category2: false,
    category3: false,
  };

  showFilters = true;
  filteredProducts = [...this.products];
  user!: any;

  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  clearFilters(): void {
    this.filters = {
      category1: false,
      category2: false,
      category3: false,
    };
    this.applyFilters();
  }

  applyFilters(): void {
    const activeFilters = Object.keys(this.filters).filter(
      (key: string) => this.filters[key]
    );

    this.filteredProducts = activeFilters.length === 0 
      ? [...this.products] 
      : this.products.filter((product) =>
          activeFilters.includes(product.category)
        );
  }

  addToCart(product: any): void {
    console.log('Added to cart:', product);
  }
}
