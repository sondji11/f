import { PanierService } from 'src/app/shared/services/panier.service';
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

 combiner:any
   
      constructor(private servProduit:ProduitsService,private PanierService:PanierService) { }

  ngOnInit(): void {
    // this.produits$=this.servProduit.all();
    this.servProduit.all().subscribe(
          data=>this.combiner=data
          
          
    )
    // console.log(this.combiner);
    
  }

    

  
  clickchanged(mess:any){
  this.combiner=mess;



    console.log(this.combiner)  

    switch (mess) {
      
      case 'burgers':this.servProduit.all().subscribe(data=>mess=data.burgers)
        
        break;

        case 'menus':this.servProduit.all().subscribe((data)=>mess=data.menus)
        
        break;
    
      default:console.log("non categorie exists!!!!!");
        break;
    }
 
  }


  ajoutpanier( ajout:Produits)
  {
    this.PanierService.addToCart(ajout)
  }
  
  
 

}
