import { Component, Input, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produits } from 'src/app/shared/models/produits';
import { ProduitsService } from 'src/app/shared/services/produits.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
// @Input()prods:Produits[]|undefined=[]

 produits:any
   //produits$ : Observable<Catalogue> | null = null; 
      catalogue : Catalogue| null = null;
      constructor(private servProduit:ProduitsService) { }

  ngOnInit(): void {
    // this.produits$=this.servProduit.all();
    this.servProduit.all().subscribe(
          data=>this.catalogue=data
          
    )
    
  }
  
  clickchanged(message:any){

    this.produits=message;

    // console.log(message)  

    switch (message) {
      
      case 'burgers':this.servProduit.all().subscribe((data)=>this.produits=data.burgers)
        
        break;

        case 'menus':this.servProduit.all().subscribe((data)=>this.produits=data.menus)
        
        break;
    
      default:this.catalogue
        break;
    }
 
  }
  
 

}
