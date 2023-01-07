import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyModel } from '../../interfaces/buy.model';
import { BuyService } from '../../Services/buy/buy.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  public buys?: BuyModel[];
  category: string = 'COMPRA';

  constructor(private buyService$: BuyService, private router: Router) {}

  ngOnInit() {
    this.getBuys();
  }

  public getBuys() {
    this.buyService$.getAllBuys().subscribe((data) => {
      this.buys = data;
    });
  }

  public goActions(id: number) {
    this.router.navigate([`/actions/${id}`]);
  }
}
