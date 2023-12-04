import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedModule = 'modulo1';

  onModuleSelected(module: any) {
    this.selectedModule = module;
  }
}
