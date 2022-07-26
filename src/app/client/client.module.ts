import { FooterComponent } from './layout-client/footer/footer.component';
import { LayoutClientModule } from './layout-client/layout-client.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
// import { ClientComponentComponent } from './client-component/client-component.component';
import { ClientComponent } from './client.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layout-client/header/header.component';
import { CardClientComponent } from './card-client/card-client.component';


@NgModule({
  declarations: [
    ClientComponent,
    DetailsComponent,
    HomeComponent,
    CardClientComponent,
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule,
    LayoutClientModule
  ]
})
export class ClientModule { }
