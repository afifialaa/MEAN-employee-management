import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from '../services/knowledge.service';


@Component({
	selector: 'app-knowledge',
	templateUrl: './knowledge.component.html',
	styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

	constructor(private knowSrvc: KnowledgeService) { }

	ngOnInit() {
	}
	
}
