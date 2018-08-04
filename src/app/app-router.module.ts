import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ChartsComponent} from './charts/charts.component';
import {StaticsComponent} from './statics/statics.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'statics', component: StaticsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routedComponents = [AppComponent];
