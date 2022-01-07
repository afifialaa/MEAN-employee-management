export const environment = {
	production: false,

	/* Account api */
	signupUrl: 'http://localhost:8080/api/v1/account/signup',
	loginUrl: 'http://localhost:8080/api/v1/account/login',
	forgotUrl: 'http://localhost:8080/account/forgot',
	checkResetTokenUrl: 'http://localhost:8080/api/v1/account/checkResetToken',
	resetPasswordUrl: 'http://localhost:8080/api/v1/account/resetPassword',

	/* Dashboard api */
	getEmployeesNumURL: 'http://localhost:8080/api/v1/dashboard/getEmployeesNum',
	getUsersNumURL: 'http://localhost:8080/api/v1/dashboard/getUsersNum',
	getDepartmentsNumURL: 'http://localhost:8080/api/v1/dashboard/getDepartmentsNum',
	getTasksNumURL: 'http://localhost:8080/api/v1/dashboard/getTasksNum',

	/* Employee api */
	createEmpURL: "http://localhost:8080/api/v1/employee/addEmp",
	updateEmpURL: "http://localhost:8080/api/v1/employee/updateEmployee",
	deleteEmpURL: "http://localhost:8080/api/v1/employee/deleteEmployee",

	searchByFirstNameURL: "http://localhost:8080/api/v1/employee/searchByFirstName",
	searchByLastNameURL: "http://localhost:8080/api/v1/employee/searchByLastName",
	searchByGenderURL: "http://localhost:8080/api/v1/employee/searchByGender",
	searchByEmailURL: "http://localhost:8080/api/v1/employee/searchByEmail",
	searchByJobTitleURL: "http://localhost:8080/api/v1/employee/searchByJobTitle",
	searchByDepartmentURL: "http://localhost:8080/api/v1/employee/searchByDepartmentURL",
	searchByCountryURL: "http://localhost:8080/api/v1/employee/searchByCountry",
	searchByCityURL: "http://localhost:8080/api/v1/employee/searchByCity",
	searchByUniversityURL: "http://localhost:8080/api/v1/employee/searchByUniversity",

	// User api
	createUserUrl: 'http://localhost:8080/api/v1/user/createUser',
	searchUserUrl: 'http://localhost:8080/api/v1/user/searchUser',

	/* Task api */
	taskURL: 'http://localhost:8080/api/v1/user/tasks',

    /* Inventory api*/
	createProductURL: 'http://localhost:3000/api/v1/products',

	/* Chat api */
	sendMessageURL: 'asdj',

    /* Blog api */
    createArticle: 'http://localhost:8080/api/v1/blog/article',
    fetchArticles: 'http://localhost:8080/api/v1/blog/user/articles',
	postDetails: 'http://localhost:8080/api/v1/blog/article',

	postComment: 'http://localhost:8080/api/v1/blog/comment'
};