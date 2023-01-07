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
import { AdminComponent } from './Modules/Pages/admin/admin.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, ProductComponent, AdminComponent],
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
