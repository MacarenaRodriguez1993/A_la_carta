import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPlatosComponent } from './components/buscar-platos/buscar-platos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'agregar',component: BuscarPlatosComponent, canActivate:[VigilanteGuard]},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
