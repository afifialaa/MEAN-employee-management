import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HostListener  } from "@angular/core";

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	showDetails;
	tasks =[];

	constructor(private taskSrvc:TaskService, private http:HttpClient) { 
		this.showDetails = this.tasks.map(i => false);
	}

	taskForm:FormGroup;
	msg: string;
	errMsg: string;

	ngOnInit() {
		this.taskForm = new FormGroup({
			task: new FormControl(''),
			project: new FormControl(''),
			dueDate: new FormControl(''),
		});

		this.taskSrvc.fetchTasks().subscribe(data => {
			this.tasks = data['tasks'];
			console.log(this.tasks);
		})
	}

	/* Add task button handler */
	createTask(){
		let task = {
			name: this.taskForm.value.task,
			project: this.taskForm.value.project,
			dueDate: this.taskForm.value.dueDate
		}

		this.taskSrvc.createTask(task).subscribe(data => {
			if(data['err']){
				this.msg = '';
				this.errMsg = data['err'];
				this.taskForm.reset();
			}else{
				this.tasks.push(task);
				this.errMsg = '';
				this.msg = data['msg'];
				this.taskForm.reset();
			}
		})
	}

	deleteTask(taskId, index: number){

		this.taskSrvc.deleteTask(taskId).subscribe(data => {
			if(data['err']){
				this.msg = '';
				this.errMsg = data['err'];
			}else{
				this.tasks.splice(index, 1);
				this.errMsg = '';
				this.msg = data['msg'];
			}
			console.log(data['msg']);
		})
	}

	show(index){
		this.showDetails[index] = !this.showDetails[index];
	}
	

}
