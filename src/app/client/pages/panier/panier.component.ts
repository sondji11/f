import { Catalogue } from 'src/app/shared/models/catalogue';
import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProduitsService } from 'src/app/shared/services/produits.service';
import { Produits } from 'src/app/shared/models/produits';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

produits! :Produits;
   

  constructor(private panierService:PanierService ) { }
   items$=this.panierService.items$;

   

  ngOnInit(): void {

  }

delete(supp:any){

 this.panierService.suppanier(supp);


}
//calcul du prix du panier








}
