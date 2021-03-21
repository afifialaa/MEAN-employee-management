import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	constructor(private http:HttpClient) { }

	createTask(task) {
		return this.http.post(environment.taskURL, task);
	}

	deleteTask(task) {
		return this.http.delete(environment.taskURL, task);
	}

	updateTask(task) {
		return this.http.put(environment.taskURL, task);
	}

	fetchTasks(task) {
		return this.http.get(environment.taskURL, task);
	}
}
