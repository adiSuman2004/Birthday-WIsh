import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  standalone: false,
  templateUrl: './final.component.html',
  styleUrl: './final.component.css'
})
export class FinalComponent implements AfterViewInit {

  showMessage = false;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {

    // Start the final cinematic reveal
    setTimeout(() => {
      this.showMessage = true;
    }, 1200);

  }

  startAgain(): void {
    this.router.navigate(['/']);
  }
}