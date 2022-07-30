import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { pipe,map ,tap} from "rxjs";
import { Catalogue } from '../models/catalogue';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  
  private url:string = "http://localhost:8000/api/catalogue"

  constructor(private http:HttpClient){ }
      all(): Observable<Catalogue> {
          return this.http.get<any>(this.url).pipe(
          map(
            data=>{
                const catalogue:Catalogue={
                  burgers:data["hydra:member"][0].burger,
                  menus:data["hydra:member"][1].menu,
                 
                }
              return catalogue
      }
     )
    )
  }

  produits$ = (id:number) => {
    return this.http.get<Catalogue>(`${this.url}/${id}`)
  }
}
