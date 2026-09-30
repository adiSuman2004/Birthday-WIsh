import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: false,
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  showYesMessage: boolean = false;

  noClicked: boolean = false;


  constructor(
    private router: Router
  ) {}


  sayYes(): void {

    this.noClicked = false;

    this.showYesMessage = true;

  }


  sayNo(): void {

    this.noClicked = true;

  }

continue(): void {
  this.router.navigate(['/letter']);
}

}