import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Memory {
  type: 'image' | 'video';
  src: string;
  date: string;
  caption: string;
}

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.css'
})
export class MemoriesComponent {

  currentIndex: number = 0;

  photos: Memory[] = [

   {
    type: 'image',
    src: 'assets/images/Memory.jpeg',
    date: '2 April 2026',
    caption: 'To the place, Where it all started❤️'
  },

  {
    type: 'image',
    src: 'assets/images/Memory1.jpeg',
    date: '10 May 2026',
    caption: 'For me this will be our first official❤️'
  },

  {
    type: 'video',
    src: 'assets/images/Memory2.mp4',
    date: '10 May 2026',
    caption: 'Well right turn onek aage nite hoto :) ❤️'
  },

  {
    type: 'image',
    src: 'assets/images/Memory3.jpeg',
    date: '13 May 2026',
    caption: 'Our first proper photo together🧿'
  },
  {
    type: 'image',
    src: 'assets/images/Memory4.jpeg',
    date: '13 May 2026',
    caption: 'Ami jor kore  niche balcony te anlam for clicking your photos ❤️'
  },
   {
    type: 'image',
    src: 'assets/images/Memory5.jpeg',
    date: '13 May 2026',
    caption: 'Cutieeeeeeeeee <3  '
  },
   {
    type: 'image',
    src: 'assets/images/Memory6.jpeg',
    date: '14 May 2026',
    caption: 'Our first mirror selfie together ❤️'
  },
   {
    type: 'image',
    src: 'assets/images/Memory7.jpeg',
    date: '14 May 2026',
    caption: 'To the place where I first told you I love you ❤️'
  },
  {
    type: 'image',
    src: 'assets/images/Rain.jpeg',
    date: '27 July 2026',
    caption: 'IDK why but this is my fav photo❤️'
  },
  {
    type: 'image',
    src: 'assets/images/Hospital.jpeg',
    date: '29 July 2026',
    caption: 'Apke sa️th hospital bhi jana ho gaya ❤️'
  },
  {
    type: 'video',
    src: 'assets/videos/Hospital2.mp4',
    date: '29 July 2026',
    caption: 'Hero Moment ❤️'
  },
  {
    type: 'image',
    src: 'assets/images/Kolkata.jpeg',
    date: '16 June 2026',
    caption: '1st time in Kolkata ❤️'
  },
  {
    type: 'image',
    src: 'assets/images/Air Hockey.jpeg',
    date: '19 June 2026',
    caption: 'You cannot beat me in Air Hockey ❤️'
  },
  {
    type: 'video',
    src: 'assets/images/Polao.mp4',
    date: '21 June 2026',
    caption: 'Tastiesttttt Polao Chicken'
  },
  {
    type: 'image',
    src: 'assets/images/Bus.jpeg',
    date: '23 June 2026',
    caption: '1st time travelling in Bus together❤️'
  },
  {
    type: 'image',
    src: 'assets/images/Shio.jpeg',
    date: '24 July 2026',
    caption: 'We kissed on the road hahahah ;)'
  },
  {
    type: 'image',
    src: 'assets/images/Tram.jpeg',
    date: '26 July 2026',
    caption: 'Well tram a finally bosla ❤️'
  },
  {
    type: 'video',
    src: 'assets/images/Train.mp4',
    date: '21 June 2026',
    caption: 'You must be tired of being this beautiful, pretty, and cute all the time. 😭❤️'
  },
  {
    type: 'video',
    src: 'assets/images/Badminton.mp4',
    date: '7 August 2026',
    caption: 'Pro Player, No Cap'
  },
  {
    type: 'image',
    src: 'assets/images/Jamai.jpeg',
    date: '9 August 2026',
    caption: 'Kamon lagtechilam ?'
  },
  {
    type: 'image',
    src: 'assets/images/Birthday.jpeg',
    date: '28 August 2026',
    caption: 'Happy Birthaday babyyyyyyyy❤️'
  },
  {
    type: 'image',
    src: 'assets/images/Happy.jpeg',
    date: '13 September 2026',
    caption: 'You Happyyyyy, Mee Happyyyyyyyyyyyy❤️'
  },
  {
    type: 'video',
    src: 'assets/images/Wonder.mp4',
    date: '∞',
    caption: 'My Babyyyyyyyyyyy ❤️'
  },


];

  constructor(private router: Router) {}

  get currentPhoto(): Memory {
    return this.photos[this.currentIndex];
  }

  nextPhoto(): void {

    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

  }

  previousPhoto(): void {

    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.photos.length - 1;
    }

  }

  goToPhoto(index: number): void {
    this.currentIndex = index;
  }

  continue(): void {
  this.router.navigate(['/story']);
}

}