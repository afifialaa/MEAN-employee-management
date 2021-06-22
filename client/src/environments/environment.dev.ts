export const environment = {
	production: false,

	/* Account api */
	signupUrl: 'http://localhost:8080/account/signup',
	loginUrl: 'http://localhost:8080/account/login',
	forgotUrl: 'http://localhost:8080/account/forgot',
	checkResetTokenUrl: 'http://localhost:8080/account/checkResetToken',
	resetPasswordUrl: 'http://localhost:8080/account/resetPassword',

	/* Dashboard api */
	getEmployeesNumURL: 'http://localhost:8080/dashboard/getEmployeesNum',
	getUsersNumURL: 'http://localhost:8080/dashboard/getUsersNum',
	getDepartmentsNumURL: 'http://localhost:8080/dashboard/getDepartmentsNum',
	getTasksNumURL: 'http://localhost:8080/dashboard/getTasksNum',

	/* Employee api */
	createEmpURL: "http://localhost:8080/employee/addEmp",
	updateEmpURL: "http://localhost:8080/employee/updateEmployee",
	deleteEmpURL: "http://localhost:8080/employee/deleteEmployee",

	searchByFirstNameURL: "http://localhost:8080/employee/searchByFirstName",
	searchByLastNameURL: "http://localhost:8080/employee/searchByLastName",
	searchByGenderURL: "http://localhost:8080/employee/searchByGender",
	searchByEmailURL: "http://localhost:8080/employee/searchByEmail",
	searchByJobTitleURL: "http://localhost:8080/employee/searchByJobTitle",
	searchByDepartmentURL: "http://localhost:8080/employee/searchByDepartmentURL",
	searchByCountryURL: "http://localhost:8080/employee/searchByCountry",
	searchByCityURL: "http://localhost:8080/employee/searchByCity",
	searchByUniversityURL: "http://localhost:8080/employee/searchByUniversity",

	// User api
	createUserUrl: 'http://localhost:8080/user/createUser',
	searchUserUrl: 'http://localhost:8080/user/searchUser',

	/* Task api */
	taskURL: 'http://localhost:8080/user/tasks',

	/* Chat api */
	sendMessageURL: 'asdj'
};