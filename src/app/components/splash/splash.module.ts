import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SplashComponent } from './splash.component';

import { SplashComponentRoutingModule } from './splash-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SplashComponentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  declarations: [SplashComponent]
})
export class SplashComponentModule {}
