import { Component } from '@angular/core';
import { Raqueta } from 'src/app/interfaces/raqueta';
import { RaquetasService } from '../../services/raquetas.service';

@Component({
  selector: 'app-raqueta-list',
  templateUrl: './raqueta-list.component.html',
  styleUrls: ['./raqueta-list.component.css']
})
export class RaquetaListComponent {
  selectedRaquetaId: string | null = null;

  public newRaqueta: Raqueta = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }

  public newUpdateRaqueta: Raqueta = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }

  constructor(private raquetaService: RaquetasService) {
    this.getAllRaquetas();
  }

  public get raquetas(): Raqueta[] {
    return this.raquetaService.raquetas;
  }

  public createRaqueta(): void {
    console.log(this.newRaqueta);
    this.raquetaService.createRaqueta(this.newRaqueta).subscribe(
      {
        next: (response: any) => {
      
          this.clearForm();
    
          this.getAllRaquetas();
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    )
  }

  public getAllRaquetas(): void{
    this.raquetaService.getAllRaquetas().subscribe({
      next: (response: any) => {
        console.log(response);
        this.raquetaService.raquetas = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public clearForm(): void {
    this.newRaqueta = {
      _id: "",
      title: "",
      price: 0,
      category: "",
      description: "",
      image: ""
    }
  }

  public clearFormUpdate(): void {
    this.newUpdateRaqueta = {
      _id: "",
      title: "",
      price: 0,
      category: "",
      description: "",
      image: ""
    }
  }

  public getRaqueta(): void {
    if(this.selectedRaquetaId !== null){
      this.raquetaService.getRaquetaById(this.selectedRaquetaId).subscribe(
        {
          next: (response: any) => {
            this.newUpdateRaqueta._id = response._id;
            this.newUpdateRaqueta.title = response.title;
            this.newUpdateRaqueta.price = response.price;
            this.newUpdateRaqueta.category = response.category;
            this.newUpdateRaqueta.description = response.description;
            this.newUpdateRaqueta.image = response.image;

          },
          error: (error: any) => {
            console.log(error);
          }
        }
      );
    }
  }

  public updateRaqueta(): void {
    console.log(this.newUpdateRaqueta);

    this.raquetaService.updateRaquetaById(this.newUpdateRaqueta).subscribe(
      {
        next: (response: any) => {
      
          this.clearFormUpdate();
    
          this.getAllRaquetas();
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    )
  }
}
