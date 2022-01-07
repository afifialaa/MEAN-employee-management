import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.dev';
import { HttpClient, HttpParams } from '@angular/common/http';
import {BlogPost} from '../../models/iblog';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private http:HttpClient) { }

    /**
     * Posts a comment
     * @returns 
     */
    postComment(postID:string, body:string){
        let comment = {
            body,
            postID
        }
        return this.http.post(environment.postComment, comment);
    }

    getPostDetails(postID:string){
        let params = new HttpParams().set('postID', postID)
        return this.http.get(environment.postDetails, {params})
    }

    /**
     * Returns all blog posts
     * @returns 
     */
    fetchBlogs(){
        return this.http.get(environment.fetchArticles);
    }

    fetchPosts(user: string){
        let params = new HttpParams().set('user', user);
        return this.http.get(environment.fetchArticles, {params: params});
    }

    /**
     * Creates a new post
     * @returns
     */
    createPost(post){
        return this.http.post(environment.createArticle, post);
    }
}
