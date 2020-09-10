import {KnowledgeService} from '../services/knowledge.service';

import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { FormControl } from '@angular/forms';

@Component({
	  selector: 'app-create-knowledge',
	  templateUrl: './create-knowledge.component.html',
	  styleUrls: ['./create-knowledge.component.css']
})
export class CreateKnowledgeComponent implements OnInit {

	data:string;
	title:FormControl = new FormControl();

	constructor(private knowSrvc:KnowledgeService) { }

	public Editor = ClassicEditor;

	ngOnInit() {
	}

	public onChange( { editor }: ChangeEvent ) {
       	this.data = editor.getData();
	}j
	
	post(){
		let knowledge = {
			email: localStorage.getItem('email'),
			title: this.title.value,
			content: this.data
		}

		this.knowSrvc.createKnowledge(knowledge).subscribe(data => {
			console.log(data);
		})

	}

}
