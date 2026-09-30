import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter',
  standalone: false,
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent implements AfterViewInit {

  envelopeOpened: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const video = document.getElementById(
      'letterBackgroundVideo'
    ) as HTMLVideoElement;

    if (video) {
      // Force background video to be muted
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