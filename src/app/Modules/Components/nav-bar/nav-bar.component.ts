import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  btnLogout(): void {
    console.log('Logout: Sales del sistema');
  }

  btnProducts(): void {
    //this.router.navigate(['/products']);
    alert('Products: En construcción');
  }

  btnIndex(): void {
    this.router.navigate(['/home']);
    alert('Home: En construcción');
  }

  btnCreate(): void {
    //this.router.navigate(['/create']);
    alert('Create: En construcción');
  }
}
