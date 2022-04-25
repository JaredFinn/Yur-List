import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreComponent } from './explore.component';

import { ExploreComponentRoutingModule } from './explore-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecipeModule } from '../recipe/recipe.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreComponentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    RecipeModule
  ],
  declarations: [ExploreComponent],
  exports: [ExploreComponent]
})
export class ExploreComponentModule {}
