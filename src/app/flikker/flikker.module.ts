import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {  ScrollingModule  }  from  '@angular/cdk/scrolling';

import { FlikkerComponent } from './flikker.component';

@NgModule({
  declarations: [FlikkerComponent],
  imports: [
    CommonModule,
    ScrollingModule
  ],

  exports: [FlikkerComponent]
})
export class FlickerModule { }
