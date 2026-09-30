import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter',
  standalone: false,
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent implements AfterViewInit {

  envelopeOpened = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const video = document.getElementById(
      'letterBackgroundVideo'
    ) as HTMLVideoElement;

    if (video) {
      video.muted = true;
      video.volume = 0;

      video.play().catch(error => {
        console.log('Background video could not autoplay:', error);
      });
    }
  }

  openLetter(): void {
    this.envelopeOpened = true;
    this.playMusic();
  }

  playMusic(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const music = document.getElementById(
      'letterMusic'
    ) as HTMLAudioElement;

    if (music) {
      music.volume = 0.30;

      music.play().catch(error => {
        console.log('Music could not play:', error);
      });
    }
  }

  continue(): void {
    this.router.navigate(['/final']);
  }
}