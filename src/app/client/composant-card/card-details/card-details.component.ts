import { PanierService } from 'src/app/shared/services/panier.service';
import { PanierComponent } from './../../pages/panier/panier.component';
import { Produitsdetails } from 'src/app/shared/modelsdetails/produitsdetails';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Produits } from 'src/app/shared/models/produits';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  @Input()Produitsdetails :any|null=null
  


  constructor(private PanierService:PanierService) { }

  ngOnInit(): void {
  }

  ajoutpanier( ajout:Produitsdetails)
  {
    this.PanierService.addToCart(ajout)
  }
  

}



