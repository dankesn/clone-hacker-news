import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../service/news.service';
import { Comment } from '../models/comment'; 

@Component({
  selector: 'hn-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
	id; 
	commentsIds: number[] = [];

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.newsService.getStory(this.id).subscribe(response =>{
  		this.commentsIds = response.kids; 
  		console.log(this.commentsIds); 
  	})


  }

}
