import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
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
