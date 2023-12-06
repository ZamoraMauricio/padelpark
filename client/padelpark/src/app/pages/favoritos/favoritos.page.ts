import { Component } from '@angular/core';
import { Favorito } from 'src/app/interfaces/favoritos';
import { FavoritoService } from './services/favoritos.service';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.page.html',
    styleUrls: ['./favoritos.page.css']
})
export class FavoritosPage {
    fav: Favorito = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }
  currentUser = "";

  constructor(private favoritoService: FavoritoService) { 
    const token = localStorage.getItem('Authorization');
    if(!token){
      return;
    }
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    this.currentUser = tokenData.id;
    console.log(this.currentUser);
    this.getFavs();
  }

  public get favs(): any[] {
    return this.favoritoService.favs;
  }
  public get favsRaq(): any[] {
    return this.favoritoService.ra;
  }
  public get favsGo(): any[] {
      return this.favoritoService.go;
    }
      
  getFavsData(){
    const favsIds = this.favoritoService.favs.map(fav => fav.idProduct);
    console.log(favsIds);
    this.favoritoService.getFavsData(favsIds).subscribe({
      next: (response: any) => {
          this.favoritoService.ra = response[0];
          this.favoritoService.go = response[1];
          console.log(this.favoritoService.ra);
          console.log(this.favoritoService.go);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getFavs(): any {
    this.favoritoService.getFavs(this.currentUser).subscribe({
      next: (response: any) => {
          this.favoritoService.favs = response;
            this.getFavsData();
      },
      error: (error: any) => {
        console.log(error);
      }
    });

  }

  removeFav(id: string, category:string): void {
    const fav = {
      idUser: this.currentUser,
      idProduct: id,
      category: category
    }
    this.favoritoService.deleteFavorite(fav).subscribe(
      {
        next: (response: any) => {
          console.log(response);
          window.location.reload();
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

}