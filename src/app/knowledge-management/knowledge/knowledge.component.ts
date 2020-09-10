import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
	selector: 'app-knowledge',
	templateUrl: './knowledge.component.html',
	styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

	data:string;
	constructor() { }

	public Editor = ClassicEditor;

	ngOnInit() {
	}

	public onChange( { editor }: ChangeEvent ) {
       	this.data = editor.getData();
	}
	
	post(){
		console.log(this.data);
		console.log(localStorage.getItem('email'));
	}

}
