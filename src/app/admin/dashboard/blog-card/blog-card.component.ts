import { Component, OnInit } from '@angular/core';
import {HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-blog-card',
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit() {
    }

    /* @HostListener('click') onClick(){
        this.router.navigate(['/admin/blog/create']);
    }*/

}
