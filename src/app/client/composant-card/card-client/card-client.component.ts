import { ProduitsService } from 'src/app/shared/services/produits.service';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Component, Input, OnInit } from '@angular/core';
import { Produits } from 'src/app/shared/models/produits';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent implements OnInit {

  @Input() produits! :Produits;

  

  
  constructor(private PanierService:PanierService,private ProduitsService:ProduitsService) { }
  
  items$ = this.PanierService.items$;



  ngOnInit(): void {

  }



  ajoutpanier( ajout:any)
  {
    this.PanierService.addToCart(ajout)
  }
  
  

  
}
