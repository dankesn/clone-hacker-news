import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../service/news.service';
import { Comment } from '../models/comment'; 
import { Story } from '../models/story'; 


@Component({
  selector: 'hn-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
	id; 
	story: Story; 

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.newsService.getStory(this.id).subscribe(response =>{
  	this.story = response; 
    });

  }

}


