import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Components
import { ComponentsModule } from './Modules/Components/Components.module';
import { HomeComponent } from './Modules/Pages/home/home.component';
import { ProductComponent } from './Modules/Pages/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CreationFormComponent } from './Modules/Pages/admin/creation-form/creation-form.component';
import { ActionFormComponent } from './Modules/Pages/admin/action-form/action-form.component';
import { BuyComponent } from './Modules/Pages/buy/buy.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CreationFormComponent,
    ActionFormComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
