import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ErrorEnLaPaginaComponent } from './pages/error-en-la-pagina/error-en-la-pagina.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contacto', component: ContactoComponent},
  //{path: 'contacto', component: ErrorEnLaPaginaComponent},
  {path: '',redirectTo:'/inicio', pathMatch:'full'},
  {path:'**', component: ErrorEnLaPaginaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
