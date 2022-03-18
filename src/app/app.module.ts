import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
registerLocaleData(localeEs, 'es');

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        { provide: LOCALE_ID, useValue: 'es' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
