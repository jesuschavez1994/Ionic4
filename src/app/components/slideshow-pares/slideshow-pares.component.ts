import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new  EventEmitter();

  SlidesOpts = {
    slidesPerView: 3.1,
    freeMode: true,
    spaceBetween: -6
  };

  mostarMasMovies(){
    this.cargarMas.emit();
  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDatelle(id: string){
    const modal = await  this.modalCtrl.create({
       component: DetalleComponent,
       componentProps: {
         id
       }
     });
       modal.present();
   }

}
