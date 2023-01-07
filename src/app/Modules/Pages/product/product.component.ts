import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ProductService } from '../../Services/product/product.service';
import { ResponseModel } from '../../interfaces/response.model';
import { ProductModel } from '../../interfaces/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public products?: ProductModel[];

  constructor(
    private productService$: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.productService$.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  public goActions() {
    this.router.navigate(['/actions']);
  }
}
