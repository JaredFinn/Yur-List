import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponentModule {

  @Output() dish =  new EventEmitter<string>();
  @Output() search = new EventEmitter<boolean>();
  
  thisDish: string

  constructor() { }

  ngOnInit() {}

  emitDish(){
    console.log("hello")
    this.dish.emit(this.thisDish);
  }

}
