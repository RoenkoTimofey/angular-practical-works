import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  category: string;
  price: number;
  stockCount: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: Product[] = [
    { name: 'Ноутбук', category: 'Електроніка', price: 25000, stockCount: 5 },
    { name: 'Мишка', category: 'Електроніка', price: 300, stockCount: 0 },
    { name: 'Стіл', category: 'Меблі', price: 3500, stockCount: 12 },
    { name: 'Крісло', category: 'Меблі', price: 2500, stockCount: 8 },
    { name: 'Книга', category: 'Книги', price: 250, stockCount: 0 },
    { name: 'Телефон', category: 'Електроніка', price: 15000, stockCount: 3 },
    { name: 'Планшет', category: 'Електроніка', price: 8000, stockCount: 7 },
    { name: 'Шафа', category: 'Меблі', price: 5000, stockCount: 0 }
  ];

  getPriceStatus(price: number): string {
    if (price < 50) {
      return 'low';
    } else if (price <= 200) {
      return 'medium';
    } else {
      return 'high';
    }
  }
}

