import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GorrasPage } from './pages/gorras/gorras.page';
import { RaquetasPage } from './pages/raquetas/raquetas.page';
import { InicioPage } from './pages/inicio/inicio.page';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FavoritosPage } from './pages/favoritos/favoritos.page';

const routes: Routes = [
  { path: "", redirectTo:"inicio", pathMatch: "full" },
  { path:"inicio", component: InicioPage },
  { path:"gorras", component: GorrasPage, canActivate: [AuthGuard] },
  { path:"raquetas", component: RaquetasPage, canActivate: [AuthGuard] },
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },
  { path:"favoritos", component: FavoritosPage, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
