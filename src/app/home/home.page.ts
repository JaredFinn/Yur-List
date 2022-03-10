import { Component, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
//import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnChanges, OnInit {
  constructor(private data: DataService,/*public _snackbar: MatSnackBar*/) {}

  @Output() ingredientsToList = new EventEmitter<string[]>();

  relevantResults: {id: number, title: string, image: string, imageType: string}[] = [];

  recipeId: number;

  recipeInfo: any;
  ingredients: string[] = [];

  rawData: any;
  rawNutrition: any;
  nutrition: {calories: string, carbs: string, fat: string, protein: string}[] = [];


  defaultScreen: boolean;

  showIngredients: boolean = false;

  dish: string;
  search = true;

  added: boolean;

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
    if(this.search){
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

  getNutrition(id: number): any{
    //Uncomment for no api calls
    //return this.data.getRecipeNutrition(id);
    this.data.getRecipeNutrition(id).subscribe((data) =>{
      this.rawNutrition = data;
      this.nutrition.push({calories: this.rawNutrition.calories, carbs: this.rawNutrition.carbs, fat: this.rawNutrition.fat, protein: this.rawNutrition.protein })
    })

}

  getRecipeId(){
    
    this.relevantResults = [];
    this.ingredients = [];
    if(this.dish)
      this.dish.replace(/\s/g, '_');
    
    //Uncomment for not api calls
    //this.relevantResults = this.data.getRecipes(this.dish).results;
    //this.nutrition = this.getNutrition(1)
    
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

  assignId(id: number){
    this.recipeId = id;
    //Uncomment for no api calls
    //this.ingredients = this.data.getRecipeInfo(this.recipeId);
    //this.showIngredients = true;
    //this.added = false;
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

  addAllItems(){
    //pass ingredients list to the list page
    this.data.setItemsList(this.ingredients);
    this.added = true;
    setTimeout(() => {
      this.showIngredients = false;
      this.getRecipeId();
    }, 1000);
    
  }

  openSnackBar(message: string, action: string) {
    /*this._snackbar.open(message, action, {
      duration: 2000,
    });*/
  }

}
