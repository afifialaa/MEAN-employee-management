import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateKnowledgeComponent } from './create-knowledge/create-knowledge.component';
import { SeekKnowledgeComponent } from './seek-knowledge/seek-knowledge.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';

@NgModule({
	declarations: [CreateKnowledgeComponent, SeekKnowledgeComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
			QuillModule.forRoot()
	],
	exports: [
		CreateKnowledgeComponent
	]
})
export class KnowledgeManagementModule { }
