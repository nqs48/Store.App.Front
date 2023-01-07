import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { HomeComponent } from './Modules/Pages/home/home.component';
import { ProductComponent } from './Modules/Pages/product/product.component';
import { CreationFormComponent } from './Modules/Pages/admin/creation-form/creation-form.component';
import { ActionFormComponent } from './Modules/Pages/admin/action-form/action-form.component';
import { BuyComponent } from './Modules/Pages/buy/buy.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'addProduct', component: CreationFormComponent },
  { path: 'actions/:id', component: ActionFormComponent},
  { path: 'buys', component: BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
