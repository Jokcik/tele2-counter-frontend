import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ChartsComponent} from './charts/charts.component';
import {StaticsComponent} from './statics/statics.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: '', component: StaticsComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'statics', component: StaticsComponent},
  {path: 'users', component: UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routedComponents = [AppComponent];
