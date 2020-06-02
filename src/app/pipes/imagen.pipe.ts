import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.j

  transform(img: string, size: string ="w500"): string {
    if (!img){
      return './assets/no-image-banner.jpg';
    }
    const imgUrl = `${URL}/${size}/${img}`;
    return imgUrl;
  }

}
