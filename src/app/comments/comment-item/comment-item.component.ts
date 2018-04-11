import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';
import { NewsService } from '../../service/news.service';


@Component({
  selector: 'hn-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
	@Input() commentId: number; 
	comment: Comment; 

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.newsService.getComment(this.commentId).subscribe(response =>{
  		this.comment = response; 
  	})
  }

}
