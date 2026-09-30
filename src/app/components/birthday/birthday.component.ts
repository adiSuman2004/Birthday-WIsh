import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday',
  standalone: false,
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent {

  constructor(private router: Router) {}

  showMemories(): void {
    this.router.navigate(['/memories']);
  }

}