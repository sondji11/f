import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:CatalogueComponent},
  {path: 'detail/:id', component: DetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule { }
