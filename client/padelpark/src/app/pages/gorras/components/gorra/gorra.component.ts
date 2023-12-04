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

  constructor(private gorrasService: GorrasService) { }

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
}  
