import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ElementRef, ViewChild} from '@angular/core';
import {KnowledgeService} from '../services/knowledge.service';

@Component({
	  selector: 'app-create-knowledge',
	  templateUrl: './create-knowledge.component.html',
	  styleUrls: ['./create-knowledge.component.css']
})
export class CreateKnowledgeComponent implements OnInit {

	createKnowledgeForm:FormGroup;
	title:FormControl = new FormControl('');
	description:FormControl = new FormControl('');
    editor:FormControl = new FormControl(null);

	constructor(private knowledgeService:KnowledgeService) { 
	}

	ngOnInit() {
		this.createKnowledgeForm = new FormGroup({
			title: this.title,
			description: this.description,
			editor: this.editor
		})
	}

	//form submit handler
	createKnowledge(){
		console.log('button was pressed');
		let knowledge = {
			email: 'alaa@gmail.com', 
			title: this.createKnowledgeForm.value.title,
			content: this.createKnowledgeForm.value.description,
		}

		//post knowledge to server
		this.knowledgeService.createKnowledge(knowledge).subscribe(res => {
			console.log(res);
		}, err => {
			console.log(err);
		})
	}

}
