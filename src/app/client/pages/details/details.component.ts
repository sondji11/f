import { Details } from './../../../shared/modelsdetails/details';
import { Produitsdetails } from 'src/app/shared/modelsdetails/produitsdetails';
import { ProduitsService } from 'src/app/shared/services/produits.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsService } from 'src/app/shared/services/details.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

  //  produitsdetails : Observable<Produitsdetails> | null = null; 
  // produitsdetails:any
  produitsdetails: any 
  
  Details:any|null=null;
  sonn:Observable<any>|null=null
  constructor( private servProduits:DetailsService,private router:ActivatedRoute) { }

  ngOnInit(): void {

    // let id=this.router.url
    
    const detid=this.router.snapshot.params['id']
    this.sonn =this.servProduits.produits$(detid)
    this.servProduits.produits$(detid).subscribe(data =>this.produitsdetails=data)
    // console.log(id);
  
    
  
    // this.servProduits.produits$(detid)
    // .subscribe(data =>this.produitsdetails=data)
      // console.log(this.produitsdetails);

  }

}
