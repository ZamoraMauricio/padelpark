import { Component, Input } from '@angular/core';
import { Raqueta } from 'src/app/interfaces/raqueta';
import { RaquetasService } from '../../services/raquetas.service';

@Component({
  selector: 'app-raqueta',
  templateUrl: './raqueta.component.html',
  styleUrls: ['./raqueta.component.css']
})
export class RaquetaComponent {
  @Input() raqueta: Raqueta = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }
  currentUser: string = "";

  constructor(private raquetasService: RaquetasService) {
    const token = localStorage.getItem('Authorization');
    if(!token){
      return;
    }
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    this.currentUser = tokenData.id;
    console.log(this.currentUser);
    this.getFavs()
   }

  onDeleteClick(_id: string) {
    this.raquetasService.deleteRaquetaById(_id).subscribe({
      next: (response: any) => {
        console.log(response);

        this.raquetasService.getAllRaquetas().subscribe({
          next: (response: any) => {
            this.raquetasService.raquetas = response;
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getFavs(): any {
    this.raquetasService.getFavs(this.currentUser).subscribe({
      next: (response: any) => {
        console.log(response);
        this.raquetasService.favs = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    });

  }

  isFav(id: string): boolean {
    const favs = this.raquetasService.favs;
    const fav = favs.find((fav: any) => fav.idProduct === id);
    return fav ? true : false;
  }

  public addToFav(idUser: string, idProduct:string, category: String): void {
    this.raquetasService.saveFav({idUser, idProduct, category}).subscribe(
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

  removeFav(id: string): void {
    const fav = {
      idUser: this.currentUser,
      idProduct: id,
      category: "raqueta"
    }
    this.raquetasService.deleteFavorite(fav).subscribe(
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
