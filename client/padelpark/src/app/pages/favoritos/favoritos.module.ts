import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFavComponent } from './components/lista-fav/lista-fav.component';
import { FavoritoComponent } from './components/favorito/favorito.component';
import { FavoritosPage } from './favoritos.page';



@NgModule({
  declarations: [
    ListaFavComponent,
    FavoritoComponent,
    FavoritosPage
  ],
  imports: [
    CommonModule
  ]
})
export class FavoritosModule { }
