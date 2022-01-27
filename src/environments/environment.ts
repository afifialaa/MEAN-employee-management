// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
    /* Account api endpoints */
	signupUrl: 'http://localhost:8080/account/signup',
	loginUrl: 'http://localhost:8080/account/login',
	forgotUrl: 'http://localhost:8080/account/forgot',
	checkResetTokenUrl: 'http://localhost:8080/account/checkResetToken',
	resetPasswordUrl: 'http://localhost:8080/account/resetPassword',

	/* Dashboard api endpoints */
	employeesNumURL: 'http://localhost:8080/dashboard/employeesNum',
	usersNumURL: 'http://localhost:8080/dashboard/usersNum',
	departmentsNumURL: 'http://localhost:8080/dashboard/departmentsNum',
	tasksNumURL: 'http://localhost:8080/tasks/num',

	/* Employee api endpoints*/
	employeeURL: "http://localhost:8080/employee",

	// User api endpoints
	userURL: 'http://localhost:8080/user/user',

	/* Task api endpoints */
	taskURL: 'http://localhost:8080/user/tasks',

    /* Inventory api endpoints */
	createProductURL: 'http://localhost:3000/products',

	/* Chat api endpoints */
	sendMessageURL: 'asdj',

	/* Blog api endpoints */
    createAricle: 'http://localhost:8080/api/v1/blog/article',
    fetchArticle: 'http://localhost:8080/api/v1/blog/user/articles',
	postDetails: 'http://localhost:8080/api/v1/blog/article',

	postComment: 'http://localhost:8080/api/v1/blog/comment'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
