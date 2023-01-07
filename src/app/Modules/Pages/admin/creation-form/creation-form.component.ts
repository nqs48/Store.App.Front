import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCommand } from 'src/app/Modules/interfaces/commands/productCommand';
import { ProductService } from 'src/app/Modules/Services/product/product.service';
import { SweetService } from 'src/app/Modules/Services/swal/sweet.service';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.css'],
})
export class CreationFormComponent implements OnInit {
  formCreateProduct: FormGroup;
  showLoading: boolean = false;

  constructor(
    private productService$: ProductService,
    private swal$: SweetService,
    private router: Router
  ) {
    this.formCreateProduct = new FormGroup({
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

  submitCreateProduct() {
    const title = '¿Estás seguro de crear el producto?';
    const message = 'Una vez guardado el producto no se invalidara la acción';
    const btnMessage = 'Crear';
    this.swal$.confirmationPopup(title, message, btnMessage).then((result) => {
      if (result.isConfirmed) {
        this.showLoading = true;
        const productCommand: ProductCommand = {
          name: this.formCreateProduct.value.productName,
          inInventory: this.formCreateProduct.value.quantity,
          enabled:
            this.formCreateProduct.value.disponibility.toLowerCase() === 'si'
              ? true
              : false,
          min: this.formCreateProduct.value.minQuantity,
          max: this.formCreateProduct.value.maxQuantity,
        };
        this.productService$.addProduct(productCommand).subscribe({
          next: () => {
            this.showLoading = false;
            this.swal$.succesMessage('Producto creado con éxito');
            this.router.navigate(['/products']);
          },
          error: () => {
            this.showLoading = false;
            this.swal$.errorMessage();
          },
        });
      }
    });
  }
}
