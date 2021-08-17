import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import {BlogPost} from '../../models/iblog';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private http:HttpClient) { }

    /**
     * Returns all blog posts
     * @returns 
     */
    fetchBlogs(){
        return this.http.get(environment.fetchPosts);
    }

    /**
     * Creates a new post
     * @returns
     */
    createPost(post){
        return this.http.post(environment.createPost, post);
    }
}
