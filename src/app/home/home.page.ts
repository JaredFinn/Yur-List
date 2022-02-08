import { Component, OnChanges } from '@angular/core';
import { DataService, Message } from '../services/data.service';
//import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnChanges {
  constructor(private data: DataService,/*public _snackbar: MatSnackBar*/) {}

  relevantResults: {id: number, title: string, image: string, imageType: string}[] = [];

  recipeId: number;

  recipeInfo: any;
  ingredients: string[] = [];

  rawData: any;
  rawNutrition: any;
  nutrition: {calories: string, carbs: string, fat: string, protein: string}[];


  defaultScreen: boolean;

  dish: string;
  search = true;

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnChanges(){
    if(this.search){
      console.log("here")
      this.defaultScreen = true;
      this.getRecipeId()
    }
  }

  searchRecipe(dish: string, search: boolean){
    this.dish = dish;
    this.search = search;
    console.log("here")
    this.defaultScreen = true;
    this.getRecipeId()
  }

  getNutrition(id: number){
    this.data.getRecipeNutrition(id).subscribe((data) =>{
      this.rawNutrition = data;
      this.nutrition.push({calories: this.rawNutrition.calories, carbs: this.rawNutrition.carbs, fat: this.rawNutrition.fat, protein: this.rawNutrition.protein })
    })

}

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getRecipeId(){
    this.relevantResults = [];
    this.ingredients = [];
    if(this.dish)
      this.dish.replace(/\s/g, '_');
    this.data.getRecipes(this.dish).subscribe((data)=>{
      this.rawData = data;
      if(this.rawData){
        for(let i = 0; i < this.rawData.results.length; i++){
            this.relevantResults.push(this.rawData.results[i]);
        }
      
      }
      this.defaultScreen = false;
      console.log(data);
    })  
  }

  assignId(id: number){
    this.recipeId = id;
    this.data.getRecipeInfo(this.recipeId).subscribe((data)=>{
      this.recipeInfo = data;
      console.log(this.recipeInfo);
      this.relevantResults = [];
      for(let i = 0; i < this.recipeInfo.extendedIngredients.length; i++){
        this.ingredients.push(this.recipeInfo.extendedIngredients[i].nameClean)
      }
    });
  }

  addAllItemsToList(){
    this.data.setItemsList(this.ingredients);
  }

  openSnackBar(message: string, action: string) {
    /*this._snackbar.open(message, action, {
      duration: 2000,
    });*/
  }

}
