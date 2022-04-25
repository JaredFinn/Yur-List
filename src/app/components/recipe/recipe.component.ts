import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  @Input() ingredients: {id: number, title: string, image: string, imageType: string}[] = [];
  @Input() nutrition: {calories: string, carbs: string, fat: string, protein: string}[] = [];
  @Input() recipeImage: any
  @Output() backToRecipe = new EventEmitter();

  added: boolean;
  showIngredients: boolean = false;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private data: DataService) { }

  ngOnInit() {}

  addAllRecipeItems(){
    //pass ingredients list to the list page
    this.data.setItemsList(this.ingredients);
    this.added = true;
    setTimeout(() => {
      this.showIngredients = false;
      this.backToRecipe.emit();
    }, 1000);
    
  }

}
