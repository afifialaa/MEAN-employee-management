import { Component, OnInit } from '@angular/core';
import {DashboardServices} from '../services/dashboard.service';
import { HostListener  } from "@angular/core";
import { Router } from '@angular/router';

@Component({
	selector: 'app-task-card',
	templateUrl: './task-card.component.html',
	styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

	constructor(private dashServ:DashboardServices, private router:Router) { }

	taskNum: number;

	ngOnInit() {
		this.dashServ.getTasksNum().subscribe( (data)=>{
			this.taskNum = data['number'];
		},
        (err)=>{
			this.taskNum = 0;
            console.log(err);
        })
	}

	/* @HostListener("click") onClick(){
		this.router.navigate(['/admin/task']);
	} */

}
