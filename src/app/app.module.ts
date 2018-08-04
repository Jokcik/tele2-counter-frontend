import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {AppRoutingModule} from './app-router.module';
import {MaterialModule} from './core/material.module';
import {ChartsModule} from './charts/charts-module';
import { StaticsComponent } from './statics/statics.component';
import {ResourceModule} from '@ngx-resource/handler-ngx-http';
import {HttpClientModule} from '@angular/common/http';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
