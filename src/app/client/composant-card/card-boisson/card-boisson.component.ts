import { Produitsdetails } from 'src/app/shared/modelsdetails/produitsdetails';
import { Component, Input, OnInit } from '@angular/core';
import { Details } from 'src/app/shared/modelsdetails/details';

@Component({
  selector: 'app-card-boisson',
  templateUrl: './card-boisson.component.html',
  styleUrls: ['./card-boisson.component.css']
})
export class CardBoissonComponent implements OnInit {
    @Input()Produitsdetails :Details|null=null


  constructor() { }

  ngOnInit(): void {
  }

}
