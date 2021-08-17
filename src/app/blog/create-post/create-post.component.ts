import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
    imgName:string;

    createPostForm:FormGroup;
    errMsg: string;
    msg: string;

    constructor(private blogSrvc:BlogService) { }

    ngOnInit() {
        this.createPostForm = new FormGroup({
            title: new FormControl(''),
            description: new FormControl(''),
            content: new FormControl(''),
            img: new FormControl('')
         })
    }

    /**
     * Create post btn handler
     * @returns
    */
    createPost(){
        let post = {
            title: this.createPostForm.value.title,
            description: this.createPostForm.value.description,
            content: this.createPostForm.value.content,
            img: this.createPostForm.value.img
        }

        console.log('post is ', post);

        this.blogSrvc.createPost(post).subscribe( (data)=>{
            this.errMsg = '';
            this.msg = 'Post was created successfully';
        }, (error)=>{
            this.msg = '';
            this.errMsg = 'Failed to create post';
        })
    }

    /**
     * Handle image input change
     * @returns
     */
    handleImageInput(file){
        console.log('handling image change');
        let nameArr = file.split('\\');
        let name = nameArr[nameArr.length - 1];
        this.imgName = name;
    }

}
