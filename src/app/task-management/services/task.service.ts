import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	constructor(private http:HttpClient) { }

	createTask(task) {
		return this.http.post(environment.taskURL, task);
	}

	deleteTask(taskId) {
		let params = new HttpParams().set('taskId', taskId);
		return this.http.delete(environment.taskURL, {params: params});
	}

	updateTask(task) {
		return this.http.put(environment.taskURL, task);
	}

	fetchTasks() {
		return this.http.get(environment.taskURL);
	}
}
