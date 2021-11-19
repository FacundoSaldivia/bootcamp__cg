import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PagesModule } from './pages/pages.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SignUpService } from './pages/services/sign-up.service';
import { HomeService } from './pages/services/home.service';

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
    MatIconModule,
    HttpClientModule,
  ],
  // Servicios especificos de un modulo
  providers: [SignUpService, HomeService],
  // Que componente quiero lanzar primero ?
  bootstrap: [AppComponent],
})
export class AppModule {}
