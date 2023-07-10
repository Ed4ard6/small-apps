import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  exports:[
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent

  ],
  imports: [
    CommonModule,
    RouterModule,//Si untilizo el router link nenceito colocar un imports de RouterModule
  ]
})
export class PagesModule { }
