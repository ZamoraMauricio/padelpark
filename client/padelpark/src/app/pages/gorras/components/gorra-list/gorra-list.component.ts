import { Component } from '@angular/core';
import { Gorra } from '../../../../interfaces/gorra';
import { GorrasService } from '../../services/gorras.service';

@Component({
  selector: 'app-gorra-list',
  templateUrl: './gorra-list.component.html',
  styleUrls: ['./gorra-list.component.css']
})
export class GorraListComponent {

  selectedGorraId: string | null = null;

  public newGorra: Gorra = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }

  public newUpdateGorra: Gorra = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }

  constructor(private gorraService: GorrasService) {
    this.getAllGorras();
  }

  public get gorras(): Gorra[] {
    return this.gorraService.gorras;
  }

  public createGorra(): void {
    console.log(this.newGorra);
    this.gorraService.createGorra(this.newGorra).subscribe(
      {
        next: (response: any) => {
      
          this.clearForm();
    
          this.getAllGorras();
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    )
  }

  public getAllGorras(): void{
    this.gorraService.getAllGorras().subscribe({
      next: (response: any) => {
        console.log(response);
        this.gorraService.gorras = response;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public clearForm(): void {
    this.newGorra = {
      _id: "",
      title: "",
      price: 0,
      category: "",
      description: "",
      image: ""
    }
  }

  public clearFormUpdate(): void {
    this.newUpdateGorra = {
      _id: "",
      title: "",
      price: 0,
      category: "",
      description: "",
      image: ""
    }
  }

  public getGorra(): void {
    if(this.selectedGorraId !== null){
      this.gorraService.getGorraById(this.selectedGorraId).subscribe(
        {
          next: (response: any) => {
            this.newUpdateGorra._id = response._id;
            this.newUpdateGorra.title = response.title;
            this.newUpdateGorra.price = response.price;
            this.newUpdateGorra.category = response.category;
            this.newUpdateGorra.description = response.description;
            this.newUpdateGorra.image = response.image;

          },
          error: (error: any) => {
            console.log(error);
          }
        }
      );
    }
  }

  public updateGorra(): void {
    console.log(this.newUpdateGorra);

    this.gorraService.updateGorraById(this.newUpdateGorra).subscribe(
      {
        next: (response: any) => {
      
          this.clearFormUpdate();
    
          this.getAllGorras();
        },
        error: (error: any) => {
          console.log(error)
        }
      }
    )
  }
}
