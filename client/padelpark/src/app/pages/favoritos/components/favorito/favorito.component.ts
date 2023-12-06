import { Component, Input } from '@angular/core';
import { Favorito } from 'src/app/interfaces/favoritos';
import { FavoritoService } from '../../services/favoritos.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})

export class FavoritoComponent{
  @Input() fav: Favorito = {
    _id: "",
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
  }

  constructor(private favService: FavoritoService) { }

  
}  
