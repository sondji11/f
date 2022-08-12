import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { CommandeComponent } from './pages/commande/commande.component';
import { PanierComponent } from './pages/panier/panier.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:CatalogueComponent},
  {path: 'detail/:id', component: DetailsComponent},
  {path: 'paniers', component: PanierComponent},
  {path: 'commandes', component: CommandeComponent},
  {path: 'inscriptions', component: InscriptionComponent},
  {path: 'connexions', component: ConnexionComponent}




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule { }
