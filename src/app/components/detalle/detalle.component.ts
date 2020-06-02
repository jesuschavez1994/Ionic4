import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast, RespuestaCredits } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = [];
  slidesOptsActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.moviesService.getPeliculaDetalle(this.id).subscribe( (resp: PeliculaDetalle)  => {
      console.log(resp);
      this.pelicula = resp;
    });

    this.moviesService.getActoresPelicula(this.id).subscribe( (resp: RespuestaCredits) => {
      console.log('CREDITOS', resp);
      this.actores = resp.cast;
    });

  }

}
