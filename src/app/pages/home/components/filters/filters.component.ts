import { Component, Output, EventEmitter } from '@angular/core';
import { RaquetasService } from 'src/app/services/raquetas.service';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['palas', 'caps', 'shirts'];
  constructor(private raquetService:RaquetasService){
    
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
