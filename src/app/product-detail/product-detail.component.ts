import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  
})
export class ProductDetailComponent implements OnInit {
  productId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
