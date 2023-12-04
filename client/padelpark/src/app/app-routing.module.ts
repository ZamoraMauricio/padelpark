import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GorrasPage } from './pages/gorras/gorras.page';

const routes: Routes = [
  { path:"gorras", component: GorrasPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
