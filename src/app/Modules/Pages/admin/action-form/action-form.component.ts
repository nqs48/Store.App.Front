import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCommand } from 'src/app/Modules/interfaces/commands/productCommand';
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
  formUpdateProduct!: FormGroup;

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

    this.formUpdateProduct = new FormGroup({
      productName: new FormControl('', [
        Validators.required,
        Validators.maxLength(200),
      ]),
      quantity: new FormControl('', [
        Validators.required,
        this.validateQuantity.bind(this),
      ]),
      minQuantity: new FormControl('', [
        Validators.required,
        this.validateMinQuantity.bind(this),
      ]),
      maxQuantity: new FormControl('', [
        Validators.required,
        this.validateMaxQuantity.bind(this),
      ]),
      disponibility: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  validateQuantity(control: AbstractControl) {
    return control.value <= 0 || control.value > 500
      ? { invalidOrder: 'Rango de 0 a 500' }
      : null;
  }

  validateMinQuantity(control: AbstractControl) {
    return control.value <= 0 || control.value > 100
      ? { invalidOrder: 'Rango de 1 a 100' }
      : null;
  }

  validateMaxQuantity(control: AbstractControl) {
    return control.value <= 0 || control.value > 100
      ? { invalidOrder: 'Rango de 1 a 100' }
      : null;
  }

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

  submitUpdateProduct() {
    const title = '¿Estás seguro de actualizar el producto?';
    const message = 'Una vez guardado el producto no se invalidara la acción';
    const btnMessage = 'Actualizar';
    this.swal$.confirmationPopup(title, message, btnMessage).then((result) => {
      if (result.isConfirmed) {
        const productModel: ProductModel = {
          id: this.idProduct,
          name: this.formUpdateProduct.value.productName,
          inInventory: this.formUpdateProduct.value.quantity,
          enabled:
            this.formUpdateProduct.value.disponibility.toLowerCase() === 'si'
              ? true
              : false,
          min: this.formUpdateProduct.value.minQuantity,
          max: this.formUpdateProduct.value.maxQuantity,
        };
        console.log('Product Update: ', productModel);
        this.productService$.updateProduct(productModel).subscribe({
          next: () => {
            this.swal$.succesMessage('Producto actualizado con éxito');
            this.router$.navigate(['/products']);
          },
          error: () => {
            this.swal$.errorMessage();
          },
        });
      }
    });
  }

  gotoProducts() {
    this.router$.navigate(['/products']);
  }
}
