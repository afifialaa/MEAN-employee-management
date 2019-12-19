import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ElementRef, ViewChild} from '@angular/core';

@Component({
		selector: 'app-create-knowledge',
		templateUrl: './create-knowledge.component.html',
		styleUrls: ['./create-knowledge.component.css']
})
export class CreateKnowledgeComponent implements OnInit {

	createKnowledgeForm:FormGroup;
	title:FormControl = new FormControl('');
	description:FormControl = new FormControl('');
	tags:FormControl = new FormControl('');
		editor:FormControl = new FormControl(null);

	tagsList: string[] = [];

	constructor() { 
	}

	ngOnInit() {
		this.createKnowledgeForm = new FormGroup({
			title: this.title,
			tags: this.tags,
				description: this.description,
				editor: this.editor
		})
	}

	//add tage button handler
	addTag(){
		console.log(this.createKnowledgeForm.value.tags);
		let tag = this.createKnowledgeForm.value.tags 
		this.tagsList.push(tag);
		this.tags.setValue(' ');

			//focus tags element
	}

	//form submit handler
	createKnowledge(){
		let knowledge = {
			title: this.createKnowledgeForm.value.title,
			description: this.createKnowledgeForm.value.description,
			tags: this.tagsList
		}

		//post knowledge to server
	}

}
