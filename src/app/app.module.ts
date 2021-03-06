import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing/app-routing.module'; 
import { NewsService } from './service/news.service';
import { HttpClientModule } from '@angular/common/http';
import {TimeAgoPipe} from 'time-ago-pipe';



import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { NewsComponent } from './news/news.component';
import { CommentsComponent } from './comments/comments.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { CommentItemComponent } from './comments/comment-item/comment-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    CommentsComponent,
    TimeAgoPipe,
    NewsItemComponent,
    CommentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
