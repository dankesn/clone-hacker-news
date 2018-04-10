import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';


@Component({
  selector: 'hn-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
	@Input() comment: Comment; 

  constructor() { }

  ngOnInit() {
  }

}
