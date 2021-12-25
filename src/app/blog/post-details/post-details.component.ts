import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {BlogService} from '../services/blog.service'

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

	constructor(private route: ActivatedRoute, private blogSrvc: BlogService) { }
	postID:string

	post = {}

	ngOnInit() {
		this.postID = this.route.snapshot.paramMap.get('id')

		this.blogSrvc.getPostDetails(this.postID).subscribe( (data)=>{
			this.post = data['details']
		}, (error)=>{
			console.log('error');
		})
	}
}
