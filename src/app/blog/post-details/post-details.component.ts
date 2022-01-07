import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {BlogService} from '../services/blog.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BlogPost} from '../../models/iblog';

@Component({
	selector: 'app-post-details',
	templateUrl: './post-details.component.html',
	styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

	constructor(private route: ActivatedRoute, private blogSrvc: BlogService) { }
	postID:string

	post: BlogPost
	errMsg: string = ''

	commentForm:FormGroup
	commentsNum:number = 0



	ngOnInit() {
		this.postID = this.route.snapshot.paramMap.get('id')

		this.blogSrvc.getPostDetails(this.postID).subscribe( (data)=>{
			this.post = data['details']
			console.log(this.post)
		}, (error)=>{
			this.errMsg = error['msg']
			console.log('error')
		})


		this.commentForm = new FormGroup({
			body: new FormControl('', [
				Validators.required,
				Validators.minLength(1)
			])
		})
	}

	postComment():void{
		let body = this.commentForm.value.body
		this.blogSrvc.postComment(this.postID, body).subscribe( (data)=>{
			console.log('comment was created')
		}, (error)=>{
			console.log('failed to create comment')
		})
	}

	cancelComment(){
		this.commentForm.reset()
	}
}
