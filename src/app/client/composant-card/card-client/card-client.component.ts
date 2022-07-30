import { Component, Input, OnInit } from '@angular/core';
import { Produits } from 'src/app/shared/models/produits';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent implements OnInit {

  @Input()produits :Produits|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
