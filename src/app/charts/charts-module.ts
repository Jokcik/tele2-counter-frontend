import {NgModule} from '@angular/core';

import {ChartsComponent} from './charts.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../core/material.module';
import {ChartModule} from 'angular-highcharts';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ChartModule,
  ],
  exports: [   ChartsComponent],
  declarations: [ChartsComponent],
  providers: [],
})
export class ChartsModule {
}
