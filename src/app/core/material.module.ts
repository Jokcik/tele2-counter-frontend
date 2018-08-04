import {NgModule} from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatGridListModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
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
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: imports,
  exports: imports,
  providers: [MatNativeDateModule]
})
export class MaterialModule {
}
