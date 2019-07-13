import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emp-crud';
  posts:any;

  readonly url1 = 'http://localhost:80/test';
  readonly url2 = 'localhost:8080';
  readonly url3 = 'localhost/test';
  readonly url4 = 'http://localhost';

  constructor(private http:HttpClient){

  }

  getPosts(){
    console.log('button was pressed');
    this.posts = this.http.get(this.url1).subscribe(data => {
      console.log(data['name']);
    });
  }
}
