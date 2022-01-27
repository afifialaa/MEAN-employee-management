export const environment = {
	production: true,

	/* Account api */
	loginUrl: '/account/login',
	signupUrl: '/user/signup',
	forgotUrl: '/account/forgot',
	checkResetTokenUrl: '/account/checkResetToken',
	resetPasswordUrl: '/account/resetPassword',

	/* Dashboard api */
	employeesNumURL: '/dashboard/getEmployeesNum',
	usersNumURL: '/dashboard/getUsersNum',
	departmentsNumURL: '/dashboard/getDepartmentsNum',

	employeeURL: "/employee",

	// User api
	userURL: '/api/v1/user',


    /* Blog api */
    createArticle: '/api/v1/blog/article',
    fetchArticle: '/api/v1/blog/articles',
    deleteArticle: '/api/v1/blog/articles',
	postDetails: '/api/v1/blog/artilce',

	postComment: '/api/v1/blog/comment',

    /* Task api */
    taskURL: '/tasks/tasks',

    /* Inventory api */
    createProductURL: '/tasks/tasks',

  	sendMessageURL: '/tasks/tasks',
};
