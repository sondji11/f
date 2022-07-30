import { FooterComponent } from './layout-client/footer/footer.component';
import { LayoutClientModule } from './layout-client/layout-client.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
// import { ClientComponentComponent } from './client-component/client-component.component';
import { ClientComponent } from './client.component';
import { DetailsComponent } from './pages/details/details.component';

import { CardClientComponent } from './composant-card/card-client/card-client.component';
import { HeaderComponent } from './layout-client/header/header.component';
import { CardBoissonComponent } from './composant-card/card-boisson/card-boisson.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';


@NgModule({
  declarations: [
    ClientComponent,
    CardClientComponent,
    DetailsComponent,
    CardBoissonComponent,
    CatalogueComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutClientModule
  ],
  exports:[
    CardClientComponent,
  ]
})
export class ClientModule { }
