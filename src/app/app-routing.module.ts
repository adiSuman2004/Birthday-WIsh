import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { MemoriesComponent } from './components/memories/memories.component';
import { StoryComponent } from './components/story/story.component';
import { ThenComponent } from './components/then/then.component';
import { QuestionComponent } from './components/question/question.component';
import { LetterComponent } from './components/letter/letter.component';
import { FinalComponent } from './components/final/final.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'birthday',
    component: BirthdayComponent
  },
  {
    path: 'memories',
    component: MemoriesComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
  path: 'question',
  component: QuestionComponent
},
{
  path: 'final',
  component: FinalComponent
},
  {
  path: 'then',
  component: ThenComponent
},
 {
    path: 'letter',
    component: LetterComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}