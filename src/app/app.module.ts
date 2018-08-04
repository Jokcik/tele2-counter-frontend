import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule} from './app-router.module';
import {MaterialModule} from './core/material.module';
import {ChartsModule} from './charts/charts-module';
import { StaticsComponent } from './statics/statics.component';
import {ResourceModule} from '@ngx-resource/handler-ngx-http';
import {HttpClientModule} from '@angular/common/http';
// import {defineLocale} from 'moment';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

// defineLocale('ru', localeRu);
// registerLocaleData(localeRu);


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StaticsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ResourceModule.forRoot(),

    ChartsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
