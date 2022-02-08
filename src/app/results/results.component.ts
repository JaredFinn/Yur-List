import { Component,  Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() recipe: {id: number, title: string, image: string, imageType: string};
  @Input() i: number;
  //@Input() nutrition: {calories: string, carbs: string, fat: string, protein: string}[];

  constructor() { }

  ngOnInit() {
    
  }
 

}
