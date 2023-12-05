import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFavComponent } from './components/lista-fav/lista-fav.component';
import { FavoritoComponent } from './components/favorito/favorito.component';



@NgModule({
  declarations: [
    ListaFavComponent,
    FavoritoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FavoritosModule { }
