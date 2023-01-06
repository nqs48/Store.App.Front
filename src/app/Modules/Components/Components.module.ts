import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionServicesComponent } from './section-services/section-services.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavBarComponent, FooterComponent, SectionServicesComponent],
  exports: [NavBarComponent, FooterComponent, SectionServicesComponent],
})
export class ComponentsModule {}
