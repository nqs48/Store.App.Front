import { ProductModel } from './product.model';

export interface BuyModel {
  id: number;
  date: string;
  idType: string;
  idClient: string;
  clientName: string;
  products: ProductModel[];
}
