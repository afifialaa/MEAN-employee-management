import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KnowledgeService } from '../services/knowledge.service';
import { ElementRef } from '@angular/core';

@Component({
	selector: 'app-fetch-knowledge',
	templateUrl: './fetch-knowledge.component.html',
	styleUrls: ['./fetch-knowledge.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class FetchKnowledgeComponent implements OnInit {

	constructor(private knowSrvc: KnowledgeService, private elementRef: ElementRef) { }

	knowledge: any[];

	ngOnInit() {
		this.fetch();
	}

	fetch() {
		this.knowSrvc.fetchKnowledge().subscribe(data => {
			this.knowledge = data['knowledge'];
		})
	}

	isShown:boolean = true;
	toggleShow(el){
		if(this.isShown){
			el.nextElementSibling.style.display = 'none';
			this.isShown = !this.isShown;
		}else{
			el.nextElementSibling.style.display = 'block';
			this.isShown = !this.isShown;
		}
	}

}
