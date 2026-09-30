import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  currentSection: string = 'landing';

  openSurprise(): void {
    this.currentSection = 'birthday';
  }

  showMemories(): void {
    console.log('Memories section coming next ❤️');
  }

}