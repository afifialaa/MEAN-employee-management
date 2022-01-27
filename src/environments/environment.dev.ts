export const environment = {
	production: false,

	/* Account api */
	signupUrl: 'http://localhost:8080/api/v1/account/signup',
	loginUrl: 'http://localhost:8080/api/v1/account/login',
	forgotUrl: 'http://localhost:8080/account/forgot',
	checkResetTokenUrl: 'http://localhost:8080/api/v1/account/checkResetToken',
	resetPasswordUrl: 'http://localhost:8080/api/v1/account/resetPassword',

	/* Dashboard api */
	employeesNumURL: 'http://localhost:8080/api/v1/dashboard/employeesNum',
	usersNumURL: 'http://localhost:8080/api/v1/dashboard/usersNum',
	departmentsNumURL: 'http://localhost:8080/api/v1/dashboard/departmentsNum',
	tasksNumURL: 'http://localhost:8080/api/v1/dashboard/tasksNum',

	/* Employee api */
	employeeURL: "http://localhost:8080/api/v1/employee",

	// User api
	userURL: 'http://localhost:8080/api/v1/user',

	/* Task api */
	taskURL: 'http://localhost:8080/api/v1/user/tasks',

    /* Inventory api*/
	createProductURL: 'http://localhost:3000/api/v1/products',

    /* Blog api */
    createArticle: 'http://localhost:8080/api/v1/blog/article',
    fetchArticles: 'http://localhost:8080/api/v1/blog/user/articles',
	postDetails: 'http://localhost:8080/api/v1/blog/article',

	postComment: 'http://localhost:8080/api/v1/blog/comment'
};