import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent {

  myList: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.myList = this.dataService.getItemsList()
  }

}
