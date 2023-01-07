import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../../interfaces/product.model';
import { ResponseModel } from '../../interfaces/response.model';
import { ProductCommand } from '../../interfaces/commands/productCommand';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpService$: HttpClient) {}

  public getAllProducts(): Observable<ProductModel[]> {
    return this.httpService$.get<ProductModel[]>(
      `https://localhost:7225/api/Product/all`
    );
  }

  public addProduct(product: ProductCommand): Observable<ProductCommand> {
    return this.httpService$.post<ProductCommand>(
      `https://localhost:7225/api/Product/add`,
      product
    );
  }
}
