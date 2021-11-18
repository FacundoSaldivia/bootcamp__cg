import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  mensaje = '...';
  n1 = 2;
  n2 = 3;

  cambiarMensaje() {
    let newMensaje = window.prompt('escriba el nuevo mensaje');
    this.mensaje = newMensaje !== null ? newMensaje : ' ';
  }
  sumar() {
    console.log(this.n1 + this.n2);
  }
}
