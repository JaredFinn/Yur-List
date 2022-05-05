import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class ListComponent {

  myIngredients: string[] = [];
  aisleList: string[] = [];

  myList: {ingredient: string, aisle: string}[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.myIngredients = this.dataService.getItemsList()
    this.aisleList = this.dataService.getAislesList();
    console.log(this.myIngredients, this.aisleList)
    this.myList = this.myIngredients.map((item: string, index: 0) => {
      return {ingredient: item, aisle: this.aisleList[index]};
    });
    console.log(this.myList)
  }

  meatsNSeafood(item: {ingredient: string, aisle: string}): boolean {
    return item.aisle.toLowerCase().includes('meat' || 'seafood');
  }

  deliNBakery(item: {ingredient: string, aisle: string}): boolean{
    return item.aisle.toLowerCase().includes('deli' || 'bakery' || 'bread');

  }

  grocery(item: {ingredient: string, aisle: string}): boolean{
    return item.aisle.toLowerCase().includes('cereal' || 'snack' || 'chip' || 'soap' || 'medicine' || 'clean');

  }

  produce(item: {ingredient: string, aisle: string}): boolean{
    return item.aisle.toLowerCase().includes('fruit' || 'vegetable');

  }

  cooking(item: {ingredient: string, aisle: string}): boolean{
    return item.aisle.toLowerCase().includes('spice' || 'seasoning' || 'suace');

  }

  dairy(item: {ingredient: string, aisle: string}): boolean{
    return item.aisle.toLowerCase().includes('cheese' || 'milk' || 'dairy');
  }

}
