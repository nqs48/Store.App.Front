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

  public goActions(id: number) {
    this.router.navigate([`/actions/${id}`]);
  }


  // public getProductById(id: number) {
  //   this.productService$.getProductById(id).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  //   }

}
