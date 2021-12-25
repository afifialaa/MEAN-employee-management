import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service';

@Component({
	selector: 'app-my-blog',
	templateUrl: './my-blog.component.html',
	styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {

	constructor(private blogSrvc: BlogService) { }

	posts;
	errMsg: string;

	ngOnInit() {
		this.fetchPosts();
	}

	fetchPosts(){
		this.blogSrvc.fetchPosts('afifi@gmail.com').subscribe( (data) => {
            this.posts = data['articles'];
		}, (error)=>{
            this.errMsg = 'Failed to fetch posts';
		})
	}

}
