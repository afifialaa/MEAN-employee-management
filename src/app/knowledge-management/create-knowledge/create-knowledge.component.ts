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

	constructor(private knowledgeService:KnowledgeService) { 
	}

	ngOnInit() {
	}

}
