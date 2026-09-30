import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-then',
  standalone: false,
  templateUrl: './then.component.html',
  styleUrl: './then.component.css'
})
export class ThenComponent {

  constructor(private router: Router) {}

  continue(): void {
    this.router.navigate(['/question']);
  }

}