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

  btnAdmin(): void {
    this.router.navigate(['/addProduct']);

  }

  btnProducts(): void {
    this.router.navigate(['/products']);
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
