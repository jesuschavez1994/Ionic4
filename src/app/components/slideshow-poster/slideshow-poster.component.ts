import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: [] = [];

  SlidesOpts = {
    slidesPerView: 3.1,
    freeMode: true,
  };

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDatelle(id: string){
    const modal = await this.modalCtrl.create({
       component: DetalleComponent,
       componentProps: {
         id
       }
     });
       modal.present();
   }

}
