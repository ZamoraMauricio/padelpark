import { Component, Input } from '@angular/core';
import { Gorra } from 'src/app/interfaces/gorra';
import { GorrasService } from '../../services/gorras.service';

@Component({
  selector: 'app-gorra',
  templateUrl: './gorra.component.html',
  styleUrls: ['./gorra.component.css']
})

export class GorraComponent {
  @Input() gorra: Gorra = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }
  currentUser: string = "";

  constructor(private gorrasService: GorrasService) {
    const token = localStorage.getItem('Authorization');
    if(!token){
      return;
    }
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    this.currentUser = tokenData.id;
    console.log(this.currentUser);
   }

  onDeleteClick(_id: string) {
    this.gorrasService.deleteGorraById(_id).subscribe({
      next: (response: any) => {
        console.log(response);

        this.gorrasService.getAllGorras().subscribe({
          next: (response: any) => {
            this.gorrasService.gorras = response;
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

  public addToFav(idUser: string, idProduct:string, category: String): void {
    this.gorrasService.saveFav({idUser, idProduct, category}).subscribe(
      {
        next: (response: any) => {
          console.log(response);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
}  
