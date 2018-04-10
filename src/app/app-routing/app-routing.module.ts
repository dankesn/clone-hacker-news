import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from '../news/news.component';
import { CommentsComponent } from '../comments/comments.component';

const routes: Routes = [
	{ path: "news", component: NewsComponent},
	{ path: "news/:id", component: CommentsComponent },
	{ path: '', redirectTo: '/news', pathMatch: 'full'}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
   exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
