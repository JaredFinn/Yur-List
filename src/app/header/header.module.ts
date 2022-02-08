import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { HeaderComponentModule } from './header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponentModule],
  imports: [
    CommonModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [HeaderComponentModule]
})
export class HeaderModule { }
