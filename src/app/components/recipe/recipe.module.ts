import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';


@NgModule({
  declarations: [RecipeComponent],
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  exports: [
    RecipeComponent
  ]
})
export class RecipeModule { }
