import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RespuestaMDB, Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasResientes: Pelicula [] = [];
  populares: Pelicula [] = [];

  // SlidesOpts = {
  //   slidesPerView: 2.3,
  //   freeMode: true,
  // };

  constructor(private movieService: MoviesService) {}

  ngOnInit(){

   this.movieService.getFeatures().subscribe((resp: RespuestaMDB) => {
     console.log('Resp', resp);
     this.peliculasResientes = resp.results;
   });

   this.getPopulares();
 }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.movieService.getPopulares().subscribe((resp: RespuestaMDB) => {
      console.log('Populares', resp);
      const arrTemp =[...this.populares, ...resp.results];
      this.populares = arrTemp;
    });
  }



}
