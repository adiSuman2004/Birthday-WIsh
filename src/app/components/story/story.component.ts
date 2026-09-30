import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story',
  standalone: false,
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {

  constructor(private router: Router) {}

  continue(): void {
  this.router.navigate(['/then']);
}

}