import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service'; 
import { Story } from '../models/story'; 

@Component({
  selector: 'hn-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	stories: Story[] = []; 
	topStoriesId: number[] = new Array<number>(); 
	newsCounter: number = 20; 

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.getIds(); 
  }


  getIds(){
    this.newsService.getTopStoriesId().subscribe(response =>{
      this.topStoriesId = response; 
      this.getInitialStories(); 
    },
    error =>{
      console.log("Error. Reason:", error.statusText);
    })
  }

  getInitialStories(){
    for (let i= 0; i < this.newsCounter; i ++){
      this.newsService.getStory(this.topStoriesId[i]).subscribe(response=>{
        this.stories.push(response); 
      },
      error =>{
        console.log("Error. Reason:", error.statusText);
      })
    }

  }

  getMoreStories(startingPoint){
    if (startingPoint){
      for (let i=startingPoint; i < this.newsCounter; i ++){
        this.newsService.getStory(this.topStoriesId[i]).subscribe(response=>{
          this.stories.push(response); 
        },
        error =>{
          console.log("Error. Reason:", error.statusText);
        })
      }
    }
  }

  getMoreNews(){
    let index = this.newsCounter; 
    this.newsCounter += 10; 
    this.getMoreStories(index); 
  }


}
