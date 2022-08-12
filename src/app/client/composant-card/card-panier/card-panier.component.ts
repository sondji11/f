import { Produitsdetails } from 'src/app/shared/modelsdetails/produitsdetails';
import { Component, Input, OnInit } from '@angular/core';
import { Produits } from 'src/app/shared/models/produits';

@Component({
  selector: 'app-card-panier',
  templateUrl: './card-panier.component.html',
  styleUrls: ['./card-panier.component.css']
})
export class CardPanierComponent implements OnInit {
  @Input() produits :Produitsdetails|null=null;


  constructor() { }

  ngOnInit(): void {
  }

}
