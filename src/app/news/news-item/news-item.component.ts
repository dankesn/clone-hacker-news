import { Component, OnInit, Input } from '@angular/core';
import { Story } from '../../models/story'; 

@Component({
  selector: 'hn-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
	@Input() story: Story;

  constructor() { }

  ngOnInit() {
  }

  splitUrl(url: string){
		let array = [];
		array = url.split("/");
		return array[2];
	}

}
