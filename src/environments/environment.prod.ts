export const environment = {
	production: true,

	/* Account api */
	loginUrl: '/account/login',
	signupUrl: '/user/signup',
	forgotUrl: '/account/forgot',
	checkResetTokenUrl: '/account/checkResetToken',
	resetPasswordUrl: '/account/resetPassword',

	/* Dashboard api */
	getEmployeesNumURL: '/dashboard/getEmployeesNum',
	getUsersNumURL: '/dashboard/getUsersNum',
	getDepartmentsNumURL: '/dashboard/getDepartmentsNum',
	getTasksNumURL: '/tasks/num',

	createEmpURL: "/employee/addEmp",
	updateEmpURL: "/employee/updateEmployee",
	deleteEmpURL: "/employee/deleteEmployee",


	/* Search employee api */
	searchByFirstNameURL: "/employee/searchByFirstName",
	searchByLastNameURL: "/employee/searchByLastName",
	searchByGenderURL: "/employee/searchByGender",
	searchByEmailURL: "/employee/searchByEmail",
	searchByJobTitleURL: "/employee/searchByJobTitle",
	searchByDepartmentURL: "/employee/searchByDepartmentURL",
	searchByCountryURL: "/employee/searchByCountry",
	searchByCityURL: "/employee/searchByCity",
	searchByUniversityURL: "/employee/searchByUniversity",

	// User api
	createUserUrl: '/user/createUser',
	searchUserUrl: '/user/searchUser',


    /* Blog api */
    createArticle: '/api/v1/blog/article',
    fetchArticle: '/api/v1/blog/articles',
    deleteArticle: '/api/v1/blog/articles',
	postDetails: '/api/v1/blog/artilce',

    /* Task api */
    taskURL: '/tasks/tasks',

    /* Inventory api */
    createProductURL: '/tasks/tasks',

  	sendMessageURL: '/tasks/tasks',
};
