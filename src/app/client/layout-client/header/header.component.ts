import { Observable } from 'rxjs/internal/Observable';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Produits } from 'src/app/shared/models/produits';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, observable, Subscription } from 'rxjs';
import { ProduitsService } from 'src/app/shared/services/produits.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']



})
export class HeaderComponent implements OnInit {
    // @Input()reviews:any
   @Output() clickchanged :EventEmitter<any> = new EventEmitter<any>();

   
  n:number=0

  constructor(private panierService :PanierService) { }

   itemsSubject = new BehaviorSubject<Produits[]>([]);
  items$:Observable<any> = this.itemsSubject.asObservable();


  ngOnInit(): void {
     this.n=this.panierService.gettaille()

    //  console.log(this.n);
     

  }
  
  filter(prod:string){
    this.clickchanged.emit(prod)

  
  }

  
  
}
