import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';
import {QuillModule} from 'ngx-quill';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PartialsModule} from '../partials/partials.module'

@NgModule({
    declarations: [BlogComponent, SinglePostComponent, CreatePostComponent, PostsComponent, MyBlogComponent, PostDetailsComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        PartialsModule,
        QuillModule.forRoot()
    ]
})
export class KnowledgeManagementModule { }
