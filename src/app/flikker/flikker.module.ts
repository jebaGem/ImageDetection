import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {  ScrollingModule  }  from  '@angular/cdk/scrolling';
import { FlikkerComponent } from './flikker.component';
import { NgOpenCVModule, OpenCVOptions } from 'ng-open-cv';

const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: 'wasm/opencv_js.wasm',
  usingWasm: true
};
@NgModule({
  declarations: [FlikkerComponent],
  imports: [
    CommonModule,
    ScrollingModule,
    NgOpenCVModule.forRoot(openCVConfig),
  ],

  exports: [FlikkerComponent]
})
export class FlickerModule { }
