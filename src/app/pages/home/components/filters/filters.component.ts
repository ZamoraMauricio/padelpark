import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['palas', 'caps', 'shirts'];

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
