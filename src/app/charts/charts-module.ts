import {NgModule} from '@angular/core';

import {ChartsComponent} from './charts.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../core/material.module';
import {ChartModule} from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ChartModule,
  ],
  exports: [   ChartsComponent],
  declarations: [ChartsComponent],
  providers: [],
})
export class ChartsModule {
}
