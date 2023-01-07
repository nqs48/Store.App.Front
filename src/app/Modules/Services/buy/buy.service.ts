import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyModel } from '../../interfaces/buy.model';

@Injectable({
  providedIn: 'root',
})
export class BuyService {
  constructor(private httpService$: HttpClient) {}

   public getAllBuys(): Observable<BuyModel[]> {
    return this.httpService$.get<BuyModel[]>(
      `https://localhost:7225/api/Buy/all`
    );
  }
}
