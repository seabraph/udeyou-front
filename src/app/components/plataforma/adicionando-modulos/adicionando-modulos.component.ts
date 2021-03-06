import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { Modulocurso } from 'src/app/models/modulocurso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-adicionando-modulos',
  templateUrl: './adicionando-modulos.component.html',
  styleUrls: ['./adicionando-modulos.component.css']
})
export class AdicionandoModulosComponent implements OnInit {
  active = 1;

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  curso: Curso = new Curso();
  modulos: any[] = []

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosService.emitirCursoByModulo.subscribe((curso:Curso) => {
      this.curso = curso
    })

    this.cursosService.emitirModByCurso.subscribe((modulos:Modulocurso[]) => {
      this.modulos = modulos;
    })

    this.cursosService.emitirCursoVoltar.subscribe((curso:Curso) => {
      this.curso = curso
    })

    this.cursosService.emitirModuloVoltar.subscribe((modulos:Modulocurso[]) => {
      this.modulos = modulos;
    })

    this.cursosService.emitirCursoPlataforma
      .subscribe(
        (curso: Curso) => {
          this.curso = curso;
        }
      );

    this.cursosService.emitirModulo
      .subscribe(
        (modulos) => {
          this.modulos = modulos;
        }
      );
  }

  public enviarCursoConteudo() {
    this.cursosService.enviarCursoConteudo(this.curso);
  }

  track(index:number, value:string){
    return index;
  }
}
