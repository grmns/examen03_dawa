import { Component } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  products = [
    { category: 'embrague', image: 'assets/producto1.png', name: 'Producto 1' },
    { category: 'freno', image: 'assets/producto2.jpg', name: 'Producto 2' },
    { category: 'embrague', image: 'assets/producto3.png', name: 'Producto 3' },
    { category: 'caja', image: 'assets/producto4.png', name: 'Producto 4' },
    { category: 'freno', image: 'assets/producto5.png', name: 'Producto 5' },
    { category: 'caja', image: 'assets/producto6.jpg', name: 'Producto 6' },
    { category: 'nueva', image: 'assets/producto7.png', name: 'Producto 7' },
    { category: 'nueva', image: 'assets/producto8.png', name: 'Producto 8' }
  ];

  filteredProducts = [...this.products];

  filterCategory(category: string) {
    if (category === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }
}
