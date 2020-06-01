import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlikkerComponent } from './flikker/flikker.component';
import { HttpClientModule } from '@angular/common/http';
import { FlickerModule } from './flikker/flikker.module';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule, SwRegistrationOptions } from '@angular/service-worker';
import { environment } from '../environments/environment';
const customDefaultOptions = {
	scrollThrottlingTime: 0,
	scrollDebounceTime: 0,
	scrollAnimationTime: 750,
	checkResizeInterval: 1000,
	resizeBypassRefreshThreshold: 5,
	modifyOverflowStyleOfParentScroll: true,
	stripedTable: false
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VirtualScrollerModule,
    FlickerModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js'),
  ],
  exports: [],
  providers: [
    {
      provide: SwRegistrationOptions,
      useFactory: () => ({ enabled: environment.production }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
