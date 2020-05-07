import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class KnowledgeService {

	constructor(private http: HttpClient) { }

	createKnowledge(knowledge){
		return this.http.post('http://localhost:8080/knowledge/createKnowledge', knowledge)
	}


}
