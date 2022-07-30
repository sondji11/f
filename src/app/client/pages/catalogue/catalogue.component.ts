import { Component, OnInit } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produits } from 'src/app/shared/models/produits';
import { ProduitsService } from 'src/app/shared/services/produits.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  
   //produits$ : Observable<Catalogue> | null = null; 
      catalogue : Catalogue| null = null;
      constructor(private servProduit:ProduitsService) { }

  ngOnInit(): void {
    // this.produits$=this.servProduit.all();
    this.servProduit.all().subscribe(
          data=>this.catalogue=data
    )
  }

}
