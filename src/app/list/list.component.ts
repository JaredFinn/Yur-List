import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {


  myList: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.myList = this.dataService.getItemsList()
  }

  ngOnChanges(){

  }

}
