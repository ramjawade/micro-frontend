import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  inStock: boolean;
}

interface Filters {
  category1: boolean;
  category2: boolean;
  category3: boolean;
  searchTerm: string;
  minPrice: number | null;
  maxPrice: number | null;
  inStockOnly: boolean;
}

type SortOption = 'name' | 'price-low' | 'price-high' | 'rating';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Wireless Headphones', subtitle: 'Premium Audio', category: 'category1', price: 129.99, rating: 4.5, image: '🎧', description: 'High-quality wireless headphones with noise cancellation', inStock: true },
    { id: 2, name: 'Smart Watch', subtitle: 'Fitness & Health', category: 'category2', price: 299.99, rating: 4.3, image: '⌚', description: 'Advanced smartwatch with health monitoring features', inStock: true },
    { id: 3, name: 'Laptop Stand', subtitle: 'Ergonomic Design', category: 'category3', price: 49.99, rating: 4.7, image: '💻', description: 'Adjustable laptop stand for better posture', inStock: false },
    { id: 4, name: 'Bluetooth Speaker', subtitle: 'Portable Audio', category: 'category1', price: 79.99, rating: 4.2, image: '🔊', description: 'Waterproof portable speaker with deep bass', inStock: true },
    { id: 5, name: 'Gaming Mouse', subtitle: 'Precision Control', category: 'category2', price: 89.99, rating: 4.6, image: '🖱️', description: 'High-DPI gaming mouse with customizable buttons', inStock: true },
    { id: 6, name: 'USB-C Hub', subtitle: 'Connectivity', category: 'category3', price: 34.99, rating: 4.1, image: '🔌', description: 'Multi-port USB-C hub for laptops', inStock: true },
    { id: 7, name: 'Wireless Charger', subtitle: 'Fast Charging', category: 'category1', price: 59.99, rating: 4.4, image: '🔋', description: '15W fast wireless charging pad', inStock: true },
    { id: 8, name: 'Mechanical Keyboard', subtitle: 'Tactile Feel', category: 'category2', price: 149.99, rating: 4.8, image: '⌨️', description: 'RGB mechanical keyboard with Cherry MX switches', inStock: false },
    { id: 9, name: 'Monitor Arm', subtitle: 'Flexible Mounting', category: 'category3', price: 89.99, rating: 4.3, image: '🖥️', description: 'Adjustable monitor arm with cable management', inStock: true },
    { id: 10, name: 'Webcam', subtitle: 'HD Streaming', category: 'category1', price: 69.99, rating: 4.0, image: '📹', description: '1080p webcam with built-in microphone', inStock: true },
    { id: 11, name: 'External SSD', subtitle: 'Fast Storage', category: 'category2', price: 199.99, rating: 4.7, image: '💾', description: '1TB external SSD with USB 3.2 Gen 2', inStock: true },
    { id: 12, name: 'Desk Lamp', subtitle: 'LED Lighting', category: 'category3', price: 44.99, rating: 4.2, image: '💡', description: 'Adjustable LED desk lamp with touch controls', inStock: true },
  ];

  filters: Filters = {
    category1: false,
    category2: false,
    category3: false,
    searchTerm: '',
    minPrice: null,
    maxPrice: null,
    inStockOnly: false,
  };

  showFilters = true;
  filteredProducts: Product[] = [];
  sortBy: SortOption = 'name';
  cartItems: Product[] = [];
  cartTotal = 0;


  ngOnInit(): void {
    this.applyFilters();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  clearFilters(): void {
    this.filters = {
      category1: false,
      category2: false,
      category3: false,
      searchTerm: '',
      minPrice: null,
      maxPrice: null,
      inStockOnly: false,
    };
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.products];

    // Category filters
    const activeFilters = Object.keys(this.filters).filter(
      (key: string) => this.filters[key as keyof Filters] === true
    );

    if (activeFilters.length > 0) {
      filtered = filtered.filter((product) =>
        activeFilters.includes(product.category)
      );
    }

    // Search filter
    if (this.filters.searchTerm.trim()) {
      const searchTerm = this.filters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.subtitle.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    // Price filters
    if (this.filters.minPrice !== null) {
      filtered = filtered.filter((product) => product.price >= this.filters.minPrice!);
    }
    if (this.filters.maxPrice !== null) {
      filtered = filtered.filter((product) => product.price <= this.filters.maxPrice!);
    }

    // Stock filter
    if (this.filters.inStockOnly) {
      filtered = filtered.filter((product) => product.inStock);
    }

    // Apply sorting
    this.sortProducts(filtered);
    this.filteredProducts = filtered;
  }

  sortProducts(products: Product[]): void {
    switch (this.sortBy) {
      case 'name':
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        products.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        products.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  onSortChange(): void {
    this.applyFilters();
  }

  addToCart(product: Product): void {
    if (!product.inStock) {
      alert('This product is out of stock!');
      return;
    }

    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      alert('Product already in cart!');
      return;
    }

    this.cartItems.push(product);
    this.cartTotal += product.price;
    
    // Show success message
    this.showNotification(`${product.name} added to cart!`);
  }

  removeFromCart(productId: number): void {
    const product = this.cartItems.find(item => item.id === productId);
    if (product) {
      this.cartTotal -= product.price;
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartTotal = 0;
  }

  checkout(): void {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    alert(`Checkout complete! Total: $${this.cartTotal.toFixed(2)}`);
    this.clearCart();
  }

  private showNotification(message: string): void {
    // Simple notification - could be enhanced with a toast service
    console.log(message);
  }

  getCategoryDisplayName(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'category1': 'Electronics',
      'category2': 'Gaming',
      'category3': 'Office'
    };
    return categoryMap[category] || category;
  }

  getRatingStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    
    if (hasHalfStar) {
      stars.push('☆');
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push('☆');
    }
    
    return stars;
  }
}
