import { Injectable } from '@angular/core';
import { Story } from '../models/story';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const baseUrl = "https://hacker-news.firebaseio.com/v0/";

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopStoriesId(){
  		
  	return this.http.get<Array<number>>(baseUrl + "topstories.json").map(response =>{
  		let retArray = new Array<number>(); 
  		response.forEach(elem => retArray.push(elem));
  		return retArray; 

  	})
  }

}
