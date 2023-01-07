import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetService {
  constructor() {}

  succesMessage(message = 'La operación se efectúo con éxito') {
    return Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'card-custom',
      },
      backdrop: `
    rgba(51, 56, 86, 0.8)
  `,
    });
  }

  errorMessage(
    message = 'Algo salio mal!',
    footer: string = 'Verifica la información ingresada'
  ) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      footer: footer,
      cancelButtonColor: '#fa3007',
      confirmButtonColor: '#673ab7',
      customClass: {
        popup: 'card-custom',
      },
      backdrop: `
    rgba(51, 56, 86, 0.8)
  `,
    });
  }

  confirmationPopup(title: string, text: string, messageButton: string) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#fa3007',
      confirmButtonColor: '#673ab7',
      confirmButtonText: messageButton,
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'card-custom',
      },
      backdrop: `
    rgba(51, 56, 86, 0.8)
  `,
    });
  }
}
