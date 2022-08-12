import { Produitsdetails } from 'src/app/shared/modelsdetails/produitsdetails';
import { Produits } from 'src/app/shared/models/produits';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  [x: string]: any;

  constructor() {

    let existingCartItems = JSON.parse(localStorage.getItem('products')||'[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
   }



   private itemsSubject = new BehaviorSubject<Produits[]>([]);
   items$:Observable<any> = this.itemsSubject.asObservable();
 
   addToCart(product:any) {
     this.items$.pipe(
       take(1),
       map((products) => {
         products.push(product);
         localStorage.setItem('products', JSON.stringify(products));
       }),
     ).subscribe();
   }

   gettaille(){
    let tab=JSON.parse(localStorage.getItem('products')||'[]') ;
    return tab.length

    

   }


   suppanier(product: any) {
    this.items$.pipe(
      take(1),
      map((products) => {
        if (products.includes(product)  ) {
          const sup=products.find((sup: {id:number}) => sup.id==product.id);
          if (sup) {
            let bro=products.findIndex((sup: any)=>sup.id==product.id);
            products.splice(bro,1)
            localStorage.setItem('products', JSON.stringify(products));
          }
        }
       
      }),
    ).subscribe();
  }

// calcul prix 


// calcTotal() {
//   if (!this.isArrayEmpty()) {
//     if (this.PanierService.length < 2) {
//       const targetProduct = this.products[0];
//       return targetProduct.price * targetProduct.num;
//     } else {
//       return this.products.reduce((a, b) => (a.num * a.price) + (b.num * b.price));
//     }
//   } else {
//     return 0;
//   }
// }








}
