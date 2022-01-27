import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service'; 

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    allArticles;
    msg: string;
    errMsg: string;

    constructor(private blogSrvc: BlogService) { }

    ngOnInit() {
        this.fetchPosts();
    }

    fetchPosts() {
        this.blogSrvc.fetchPosts('').subscribe((data) => {
            this.allArticles = data['articles'];
        }, (error) => {
            this.msg = '';
            this.errMsg = 'Failed to fetch articles';
        })

    }

}
