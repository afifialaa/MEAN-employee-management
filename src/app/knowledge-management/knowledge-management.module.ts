import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateKnowledgeComponent } from './create-knowledge/create-knowledge.component';
import { SeekKnowledgeComponent } from './seek-knowledge/seek-knowledge.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { MatInputModule, MatButtonModule, MatTabsModule, MatRadioModule, MatSelectModule} from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
	declarations: [CreateKnowledgeComponent, SeekKnowledgeComponent, KnowledgeComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		QuillModule.forRoot(),
		MatTabsModule,
		MatInputModule,
		MatButtonModule,
		MatRadioModule,
		MatSelectModule,
		CKEditorModule,
		RouterModule
	],
	exports: [
		KnowledgeComponent,
		CreateKnowledgeComponent,
		CreateKnowledgeComponent
	]
})
export class KnowledgeManagementModule { }
