import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavBarComponent,
    FooterComponent,
    SectionServicesComponent,
    LoadingComponent,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    SectionServicesComponent,
    LoadingComponent
  ],
})
export class ComponentsModule {}
