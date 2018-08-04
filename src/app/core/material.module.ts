import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatSidenavModule, MatSortModule, MatTableModule,
  MatToolbarModule, MatTreeModule
} from '@angular/material';

const imports = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTreeModule,
];

@NgModule({
  imports: imports,
  exports: imports
})
export class MaterialModule {
}
