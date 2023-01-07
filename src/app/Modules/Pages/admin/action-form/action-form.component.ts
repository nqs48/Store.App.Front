import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Modules/Services/product/product.service';
import { SweetService } from 'src/app/Modules/Services/swal/sweet.service';
import { ProductModel } from '../../../interfaces/product.model';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css'],
})
export class ActionFormComponent implements OnInit {
  idProduct!: any;
  product!: ProductModel;

  constructor(
    private router$: Router,
    private activateRoute: ActivatedRoute,
    private productService$: ProductService,
    private swal$: SweetService
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.idProduct = params['id'];
      console.log('Id Product: ' + this.idProduct);
    });

    this.productService$.getProductById(this.idProduct).subscribe((data) => {
      this.product = data;
      console.log('Product: ', this.product);
    });
  }

  ngOnInit() {}

  public deleteProduct(idProduct: number) {
    let title = '';
    let text = 'Una vez eliminado no se podrá revertir';
    let btnMessage = 'Aceptar';
    this.swal$.confirmationPopup(title, text, btnMessage).then((result) => {
      if (result.isConfirmed) {
        this.productService$.deleteProduct(idProduct).subscribe({
          next: (res) => {
            this.swal$.succesMessage('Producto eliminado correctamente');
            this.router$.navigate(['/products']);
          },
          error: (err) => {
            this.swal$.errorMessage();
          },
        });
      }
    });
  }

  gotoProducts(){
    this.router$.navigate(['/products']);
  };
}
