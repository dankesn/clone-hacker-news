import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../service/news.service';
@Component({
  selector: 'hn-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
	id; 

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	console.log(this.id); 

  }

}
