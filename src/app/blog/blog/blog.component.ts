import { Component, OnInit } from '@angular/core';
import {BlogService} from '../services/blog.service'; 

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    allArticles;
    msg: string;
    errMsg: string;

    constructor(private blogSrvc: BlogService) { }

    ngOnInit() {
        this.fetchAllBlog();
    }

    fetchAllBlog(){
        this.blogSrvc.fetchBlogs().subscribe( (data)=>{
            this.allArticles = data['articles'];
        }, (error)=> {
            this.msg = '';
            this.errMsg = 'Failed to fetch articles';
            console.log('Failed to fetch articles');
        })

    }

}
