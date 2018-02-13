import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppExtrasModule } from './app/app-extras.module';

//declare const Office: any;

// Office.initialize = function () {
  platformBrowserDynamic().bootstrapModule(AppExtrasModule);
 //};


