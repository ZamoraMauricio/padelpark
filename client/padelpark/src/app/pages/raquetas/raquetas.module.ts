import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RaquetasPage } from './raquetas.page';
import { RaquetaComponent } from './components/raqueta/raqueta.component';
import { RaquetaListComponent } from './components/raqueta-list/raqueta-list.component';

@NgModule({
  declarations: [
    RaquetasPage,
    RaquetaComponent,
    RaquetaListComponent
  ],
  exports: [
    RaquetaListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class RaquetasModule { }
