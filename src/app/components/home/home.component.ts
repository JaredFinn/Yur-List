import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  searchType: string;

  constructor() { 
  }

  ngOnInit() {
    
  }

  segmentChanged(e: any){
    this.searchType = e.detail.value;
  }

}
