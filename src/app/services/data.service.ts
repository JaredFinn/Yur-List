import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  private RECIPES_API = "https://api.spoonacular.com/recipes/";
  private API_KEY = "01524805806f4038b1575d6600ddc828"

  itemsList: string[] = [];
  aislesList: string[] = [];

  recipes = {
    number: 10,
    offset: 0,
    results: [
      {
        id: 638231,
        image: "https://spoonacular.com/recipeImages/638231-312x231.jpg",
        imageType: "jpg",
        title: "Chicken Parmayonnaise"
      },
      {
        id: 638231,
        image: "https://spoonacular.com/recipeImages/638231-312x231.jpg",
        imageType: "jpg",
        title: "Chicken Parmayonnaise"
      },
      {
        id: 638231,
        image: "https://spoonacular.com/recipeImages/638231-312x231.jpg",
        imageType: "jpg",
        title: "Chicken Parmayonnaise"
      },
      {
        id: 638231,
        image: "https://spoonacular.com/recipeImages/638231-312x231.jpg",
        imageType: "jpg",
        title: "Chicken Parmayonnaise"
      },
      {
        id: 638231,
        image: "https://spoonacular.com/recipeImages/638231-312x231.jpg",
        imageType: "jpg",
        title: "Chicken Parmayonnaise"
      }
    ],
    totalResults: 9
  }

  nutrition = [{
    calories: "289k",
    carbs: "0.6g",
    fat: "19g",
    protein: "27g",
  },
  {
    calories: "289k",
    carbs: "0.6g",
    fat: "19g",
    protein: "27g",
  },
  {
    calories: "289k",
    carbs: "0.6g",
    fat: "19g",
    protein: "27g",
  },
  {
    calories: "289k",
    carbs: "0.6g",
    fat: "19g",
    protein: "27g",
  },
  {
    calories: "289k",
    carbs: "0.6g",
    fat: "19g",
    protein: "27g",
  },
]

ingredients = [
  'Kosher salt',
  'Italian seasoning',
  'mayonnaise',
  'parmesan',
  'boneless skinless chicken breast',
]

aisles = [
  "Spices and Seasonings",
  "Spices and Seasonings",
  "Condiments",
  "Cheese",
  "Meat",
]
  

  public getRecipes(dish: string){
    //return this.recipes;
    return this.httpClient.get(this.RECIPES_API + `complexSearch?apiKey=${this.API_KEY}&query=${dish}`);
  }

  public getRecipeInfo(id: number){
    //return this.ingredients;
    return this.httpClient.get(this.RECIPES_API + `${id}/information?apiKey=${this.API_KEY}`);
  }

  public getRecipeNutrition(id: number){
    //return this.nutrition
    return this.httpClient.get(this.RECIPES_API + `${id}/nutritionWidget.json?apiKey=${this.API_KEY}`);
  }

  public setItemsList(ingredients: any, aisles: any){
    for(let i = 0; i < ingredients.length; i++){
      this.itemsList.push(ingredients[i]);
      this.aislesList.push(aisles[i]);
    }
  }

  public getItemsList(){
    return this.itemsList;
  }

  public getAislesList(){
    return this.aislesList;
  }

}