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

  constructor(private raquetasService: RaquetasService) { }

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
}
