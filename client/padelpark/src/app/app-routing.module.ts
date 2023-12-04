import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GorrasPage } from './pages/gorras/gorras.page';
import { RaquetasPage } from './pages/raquetas/raquetas.page';
import { InicioPage } from './pages/inicio/inicio.page';

const routes: Routes = [
  { path: "", redirectTo:"inicio", pathMatch: "full" },
  { path:"inicio", component: InicioPage },
  { path:"gorras", component: GorrasPage },
  { path:"raquetas", component: RaquetasPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
