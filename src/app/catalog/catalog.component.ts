import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [NgFor],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products = [
    { id: 1, name: '💡 Foco LED ', price: 15.99 },
    { id: 2, name: '🔦 Foco Recargable', price: 25.50},
    { id: 3, name: '🦺 Luz de Emergencia', price: 35.00 }
  ];

  constructor(private router: Router) {}

  // Método para redirigir al detalle del producto
  goToProductDetail(productId: number) {
    this.router.navigate([`/product/${productId}`]);
  }
}

