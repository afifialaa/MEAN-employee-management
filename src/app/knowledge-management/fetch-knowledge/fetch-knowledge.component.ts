import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KnowledgeService } from '../services/knowledge.service';

@Component({
	selector: 'app-fetch-knowledge',
	templateUrl: './fetch-knowledge.component.html',
	styleUrls: ['./fetch-knowledge.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class FetchKnowledgeComponent implements OnInit {

	constructor(private knowSrvc:KnowledgeService) { }

	knowledge: any[];

	ngOnInit() {
		this.fetch();
	}

	fetch(){
		this.knowSrvc.fetchKnowledge().subscribe(data => {
			this.knowledge = data['knowledge'];
		})
	}

	isShown:boolean = true;
	toggleShow(){
		this.isShown = !this.isShown;
	}

}
