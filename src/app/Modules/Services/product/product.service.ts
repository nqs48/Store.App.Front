import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpService$: HttpClient) {}

  public getAllProducts() {
    return this.httpService$.get(`https://localhost:7225/api/Product/all`);
  }
}
