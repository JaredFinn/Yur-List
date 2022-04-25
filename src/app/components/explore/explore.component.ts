import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-explore',
  templateUrl: 'explore.component.html',
  styleUrls: ['explore.component.scss']
})
export class ExploreComponent {

  
  @Output() ingredientsToList = new EventEmitter<string[]>();

  dish: string;
  find: boolean;

  relevantResults: {id: number, title: string, image: string, imageType: string}[] = [];

  recipeId: number;

  recipeInfo: any;
  ingredients: string[] = [];

  rawData: any;
  rawNutrition: any;
  nutrition: {calories: string, carbs: string, fat: string, protein: string}[] = [];


  defaultScreen: boolean;

  showIngredients: boolean = false;
  searchItem = true;

  added: boolean;

  selectedRecipe: any;

  constructor(private data: DataService) {}


  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
    if(this.searchItem){
      this.defaultScreen = true;
      this.getRecipe()
    }
  }

  findRecipe(){
    this.searchItem = true;
    this.defaultScreen = true;
    this.getRecipe()
  }

  getNutrition(id: number): any{
    //Uncomment for no api calls
    //return this.data.getRecipeNutrition(id);
    this.data.getRecipeNutrition(id).subscribe((data) =>{
      this.rawNutrition = data;
      this.nutrition.push({calories: this.rawNutrition.calories, carbs: this.rawNutrition.carbs, fat: this.rawNutrition.fat, protein: this.rawNutrition.protein })
    })

}

  getRecipe(){
    if(this.showIngredients){
      this.showIngredients = false;
    }
    
    this.relevantResults = [];
    this.ingredients = [];
    if(this.dish)
      this.dish.replace(/\s/g, '_');
    
    //Uncomment for not api calls
    // this.relevantResults = this.data.getRecipes(this.dish).results;
    // this.nutrition = this.getNutrition(1)
    
    this.data.getRecipes(this.dish).subscribe((data)=>{
      this.rawData = data;
      if(this.rawData){
        for(let i = 0; i < this.rawData.results.length; i++){
            this.relevantResults.push(this.rawData.results[i]);
            this.getNutrition(this.rawData.results[i].id)
        }
      }
      this.defaultScreen = false;
      console.log(data);
    })  
  }

  getRecipeInfo(id: number){
    this.recipeId = id;
    //Uncomment for no api calls
    // this.ingredients = this.data.getRecipeInfo(this.recipeId);
    // this.showIngredients = true;
    // this.added = false;
    this.data.getRecipeInfo(this.recipeId).subscribe((data)=>{
      this.recipeInfo = data;
      console.log(this.recipeInfo);
      this.relevantResults = [];
      for(let i = 0; i < this.recipeInfo.extendedIngredients.length; i++){
        this.ingredients.push(this.recipeInfo.extendedIngredients[i].nameClean)
      }
      this.showIngredients = true;
      this.added = false;
    });
  }

  addAllRecipeItems(){
    //pass ingredients list to the list page
    this.data.setItemsList(this.ingredients);
    this.added = true;
    setTimeout(() => {
      this.showIngredients = false;
      this.getRecipe();
    }, 1000);
    
  }


}
