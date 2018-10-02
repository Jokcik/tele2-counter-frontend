import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ChartsComponent} from './charts/charts.component';
import {StaticsComponent} from './statics/statics.component';
import {UsersComponent} from './users/users.component';
import {StreamsComponent} from './streams/streams.component';
import {ReferersComponent} from './referers/referers.component';

const routes: Routes = [
  {path: '', component: StaticsComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'statics', component: StaticsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'streams', component: StreamsComponent},
  {path: 'referers', component: ReferersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

export const routedComponents = [AppComponent];
