import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ServiciosComponent,
    InicioComponent,
    ProductosComponent,
    MarcasComponent,
    ContactenosComponent,
    NavmenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
