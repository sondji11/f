import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']


})
export class HeaderComponent implements OnInit {
    // @Input()reviews:any
   @Output() clickchanged :EventEmitter<any> = new EventEmitter<any>();
  

  constructor() { }


  ngOnInit(): void {
  }
  
  filter(prod:string){
    this.clickchanged.emit(prod)
  }
  
}
