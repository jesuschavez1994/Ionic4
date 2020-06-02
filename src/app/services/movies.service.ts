import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PeliculaDetalle, RespuestaCredits } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPages = 0;

  private ejecutarQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get( query );
  }

  constructor(private http: HttpClient) {}

  getPopulares(){
    this.popularesPages++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPages}`;
    return this.ejecutarQuery(query);
  }

  getFeatures(){
      return this.ejecutarQuery('/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-05-30');
  }

  getPeliculaDetalle(id: string){
    return this.ejecutarQuery(`/movie/${id}?a=1`);
  }

  getActoresPelicula(id: string){
    return this.ejecutarQuery(`/movie/${id}/credits?a=1`);
  }

}
