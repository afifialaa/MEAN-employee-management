import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class JobsService {

	constructor() { }

	jobs: any[] = [
		'nurse',
		'social worker',
		'civil engineer',
		'assistant manager',
		'recruiter',
		'design engineer',
		'project manager',
		'editor',
		'programmer',
		'customer service'
	]
}
