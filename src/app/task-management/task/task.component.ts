import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	constructor(private taskSrvc:TaskService, private http:HttpClient) { }

	taskForm:FormGroup;
	msg: string;
	errMsg: string;

	ngOnInit() {
		this.taskForm = new FormGroup({
			task: new FormControl(''),
			project: new FormControl(''),
			dueDate: new FormControl(''),
		});
	}

	createTask(){
		let task = {
			name: this.taskForm.value.task,
			project: this.taskForm.value.project,
			dueDate: this.taskForm.value.dueDate
		}

		console.log(task.dueDate);

		this.taskSrvc.createTask(task).subscribe(data => {
			if(data['err']){
				this.msg = '';
				this.errMsg = data['err'];
				this.taskForm.reset();
			}else{
				this.errMsg = '';
				this.msg = data['msg'];
				this.taskForm.reset();
			}
		})
	}


}
