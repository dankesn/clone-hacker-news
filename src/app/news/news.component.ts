import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service'; 

@Component({
  selector: 'hn-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

	topStoriesId: number[] = new Array<number>(); 

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.getIds(); 


}



	getIds(){
 	this.newsService.getTopStoriesId().subscribe(response =>{
  		this.topStoriesId = response; 
  	})
  }
}
