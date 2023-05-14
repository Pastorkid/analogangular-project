import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';

import { AppComponent } from './app/app.component';
import { mainProviders } from './main.providers';
import { FormlyModule } from '@ngx-formly/core';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  //add httclient module

  providers: [
    provideFileRouter(),
    ...mainProviders,
    importProvidersFrom(FormlyModule.forRoot()),
    provideAnimations(),
  ],
});
