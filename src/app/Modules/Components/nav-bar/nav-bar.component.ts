import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetService } from '../../Services/swal/sweet.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private Swal$: SweetService) {}

  ngOnInit() {}

  btnAdmin(): void {
    this.router.navigate(['/addProduct']);
  }

  btnProducts(): void {
    this.router.navigate(['/products']);
  }

  btnIndex(): void {
    this.router.navigate(['/home']);
  }

  btnCreate(): void {
    this.router.navigate(['/buys']);
  }
}
