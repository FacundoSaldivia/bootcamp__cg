import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  save(usuario: Usuario): Observable<Usuario> {
    console.log('Save');

    /*     let headers = new HttpHeaders({'Content-Type':'application/json', 'Access-Control-Allow-Origin': 'http://localhost:4200/'});
     */
    return this.http.post<Usuario>('http://localhost:3000/users', usuario);
  }

  getAll() {
    return this.http.get<Usuario>('http://localhost:3000/users');
  }
}
