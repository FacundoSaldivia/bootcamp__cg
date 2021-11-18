import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesModule } from './pages/pages.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  // Componentes que voy a utlizar
  declarations: [AppComponent, ContadorComponent],
  // Importacion de modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  // Servicios especificos de un modulo
  providers: [],
  // Que componente quiero lanzar primero ?
  bootstrap: [AppComponent],
})
export class AppModule {}
