import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core'
import { Observable } from 'rxjs';
import { Produto } from '../types/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

    private http: HttpClient = inject(HttpClient);
    private readonly BASE_URL: string = 'https://publicacao-backend-msk1.onrender.com/api';

    public list(): Observable<Produto[]> {
      return this.http.get<Produto[]>(`${this.BASE_URL}/produtos`);
    }

    public save(produto: Produto): Observable<any> {
      return this.http.post(`${this.BASE_URL}/produtos`, produto);
    }
}
