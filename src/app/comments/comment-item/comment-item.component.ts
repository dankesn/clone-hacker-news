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
  showReplies: boolean = false; 
  showComment: boolean = true; 
  @Input() storyId; 

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  	this.newsService.getComment(this.commentId).subscribe(response =>{
  		this.comment = response; 
  	},
    error =>{
      console.log("Error. Reason:", error.statusText);
    }
    )
  }

  toggleReplies(){
    this.showReplies = !this.showReplies; 
  }

  toggleComment(){
    this.showComment = !this.showComment; 
    this.showReplies = false; 
  }

}
