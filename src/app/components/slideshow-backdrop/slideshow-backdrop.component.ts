import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas: [] = [];

  SlidesOpts = {
    slidesPerView: 1.1,
    freeMode: true,
  };

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