import {
  MatButtonModule, MatCheckboxModule, MatListModule, MatExpansionModule,
  MatCardModule, MatToolbarModule, MatDividerModule, MatIconModule
} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule
  ]
})

export class MaterialModule {

}
