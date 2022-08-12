import { PanierComponent } from './pages/panier/panier.component';
import { ClientRoutingModule } from './client-routing.module';
import { CardClientComponent } from './composant-card/card-client/card-client.component';
import { LayoutClientModule } from './layout-client/layout-client.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component'
import { CardBoissonComponent } from './composant-card/card-boisson/card-boisson.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CardDetailsComponent } from './composant-card/card-details/card-details.component';
import { CardPanierComponent } from './composant-card/card-panier/card-panier.component';
import { ClientComponent } from './client.component';
import { CommandeComponent } from './pages/commande/commande.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';



@NgModule({
  declarations: [
    
    ClientComponent,
    CardClientComponent,
    DetailsComponent,
    CardBoissonComponent,
    CatalogueComponent,
    CardDetailsComponent,
    CardPanierComponent,
    PanierComponent,
    CommandeComponent,
    InscriptionComponent,
    ConnexionComponent  
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
