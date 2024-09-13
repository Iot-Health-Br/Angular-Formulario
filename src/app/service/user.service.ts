import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Certifique-se de importar o HttpClient
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'  // Certifique-se de que o serviço está disponível globalmente
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/usuarios';  // URL da sua API

  constructor(private http: HttpClient) {}  // Injeção do HttpClient

  // Método para salvar o usuário
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);  // Faz a requisição POST
  }
}
