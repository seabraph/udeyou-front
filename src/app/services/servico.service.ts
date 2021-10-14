import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from '../models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  servico: Servico = new Servico();

  constructor(private http: HttpClient) { }

  public listarServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>("http://localhost:4200/api/servico");
  }

  public criarServico(servico: Servico): void {
    this.http.post("http://localhost:4200/api/servico", servico).subscribe(resultado => console.log(resultado));
  }

  public deletarServico(id: number | undefined): void {
    this.http.delete(`http://localhost:4200/api/servico/${id}`).subscribe(resultado => console.log(resultado));
  }

  public receberIdServico(id: number | undefined): void {
    this.servico.id = id;
  }
}
