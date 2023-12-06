import { Component } from '@angular/core';
import { FavoritoService } from '../../services/favoritos.service';

@Component({
  selector: 'app-lista-fav',
  templateUrl: './lista-fav.component.html',
  styleUrls: ['./lista-fav.component.css']
})
export class ListaFavComponent {
  currentUser: string = "";
  constructor(private favoritoService: FavoritoService) {
    const token = localStorage.getItem('Authorization');
    if(!token){
      return;
    }
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    this.currentUser = tokenData.id;
    console.log(this.currentUser);
  }

  getFavs(): any {
    this.favoritoService.getFavs(this.currentUser).subscribe({
      next: (response: any) => {
        console.log(response);
        this.favoritoService.favs = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
