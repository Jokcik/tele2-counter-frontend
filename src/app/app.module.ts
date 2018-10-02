import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule} from './app-router.module';
import {MaterialModule} from './core/material.module';
import {ChartsModule} from './charts/charts-module';
import {StaticsComponent} from './statics/statics.component';
import {ResourceModule} from '@ngx-resource/handler-ngx-http';
import {HttpClientModule} from '@angular/common/http';
import {UsersComponent} from './users/users.component';
import {ChartModule} from 'angular-highcharts';
import {FormsModule} from '@angular/forms';
import {StreamsComponent} from './streams/streams.component';
import {ReferersComponent} from './referers/referers.component';

import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StaticsComponent,
    UsersComponent,
    StreamsComponent,
    ReferersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ResourceModule.forRoot(),

    ChartsModule,
    ChartModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
