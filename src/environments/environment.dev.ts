const PORT = 9000

export const environment = {
	production: false,


	/* Account api */
	loginUrl: `http://localhost:${PORT}/api/v1/account/login`,
	signupUrl: `http://localhost:${PORT}/api/v1/account/register`,
	forgotUrl: `http://localhost:${PORT}/account/forgot`,
	checkResetTokenUrl: `http://localhost:${PORT}/api/v1/account/checkResetToken`,
	resetPasswordUrl: `http://localhost:${PORT}/api/v1/account/resetPassword`,

	/* Dashboard api */
	employeesNumURL: `http://localhost:${PORT}/api/v1/dashboard/employeesNum`,
	usersNumURL: `http://localhost:${PORT}/api/v1/dashboard/usersNum`,
	departmentsNumURL: `http://localhost:${PORT}/api/v1/dashboard/departmentsNum`,
	tasksNumURL: `http://localhost:${PORT}/api/v1/dashboard/tasksNum`,

	/* Employee api */
	employeeURL: `http://localhost:${PORT}/api/v1/employee`,

	// User api
	userURL: `http://localhost:${PORT}/api/v1/user/register`,

	/* Task api */
	taskURL: `http://localhost:${PORT}/api/v1/user/tasks`,

    /* Inventory api*/
	createProductURL: `http://localhost:3000/api/v1/products`,

    /* Blog api */
    createArticle: `http://localhost:${PORT}/api/v1/blog/article`,
    fetchArticles: `http://localhost:${PORT}/api/v1/blog/user/articles`,
	postDetails: `http://localhost:${PORT}/api/v1/blog/article`,

	postComment: `http://localhost:${PORT}/api/v1/blog/comment`
};