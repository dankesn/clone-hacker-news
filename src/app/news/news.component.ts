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
  		this.getTopStories(); 
  	},
    error =>{
      console.log("Error. Reason:", error.statusText);
    })
  }

  	getTopStories(y?){
  		   if (y){
     for (let i= y; i < this.newsCounter; i ++){
     this.newsService.getStory(this.topStoriesId[i]).subscribe(response=>{
       this.stories.push(response); 
     },
     error =>{
      console.log("Error. Reason:", error.statusText);
    })
   }

   }else {   
     for (let i= 0; i < this.newsCounter; i ++){
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
  		this.getTopStories(index); 
	}

  

   

}
