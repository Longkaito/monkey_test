import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { EditQuestionComponent } from './component/edit-question/edit-question.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'list',
    component: MainComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'edit-question',
    component: EditQuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
