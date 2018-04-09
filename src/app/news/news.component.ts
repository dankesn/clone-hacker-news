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

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.getIds(); 


}

	getIds(){
 	this.newsService.getTopStoriesId().subscribe(response =>{
  		this.topStoriesId = response; 
  		this.getTopStories(); 
  		console.log(this.stories); 
  	})
  }

  	getTopStories(){
  		for (let i= 0; i < 20; i ++){
     this.newsService.getStory(this.topStoriesId[i]).subscribe(response=>{
       this.stories.push(response);

     })
  	}
}

	splitUrl(url: string){
		let array = [];
		array = url.split("/");
		return array[2];
	}
}
