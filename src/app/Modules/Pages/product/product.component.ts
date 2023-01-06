import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any;

  constructor(
    private router$: Router,
    private productService$: ProductService
  ) {}

  ngOnInit() {
    this.productService$.getAllProducts().subscribe({
      next: (data) => {
        console.log('Return data products--: ', data);
        this.products = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }
}
