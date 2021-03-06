import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Curso } from 'src/app/models/curso';
import { Modulocurso } from 'src/app/models/modulocurso';
import { CursosService } from 'src/app/services/cursos.service';


@Component({
  selector: 'app-curso-aprendizado',
  templateUrl: './curso-aprendizado.component.html',
  styleUrls: ['./curso-aprendizado.component.css']
})
export class CursoAprendizadoComponent implements OnInit {

  urlImagem?: string = "https://udeyou.s3.sa-east-1.amazonaws.com/"

  active = 1;
  
  modulos?: any[] = [];
  curso: Curso = new Curso();

  constructor(
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursosService.emitirModulo
      .subscribe(
        (modulo) => {
          console.log(this.modulos)
          this.modulos = modulo;
        }
      );

      this.cursosService.emitirCursoAprendizado
        .subscribe(
          (curso: Curso) => {
            this.curso = curso
          }
        );
  }

  track(index:number, value:string){
    return index;
  }

}
