export const environment = {
	production: true,

	// Account api
	signupUrl: '/user/signup',
	loginUrl: '/user/login',

	// Dashboard api
	getEmployeesNumUrl: '/dashboard/getEmployeesNum',
	getUsersNumUrl: '/dashboard/getUsersNum',
	getDepartmentsNumUrl: '/dashboard/getDepartmentsNum',

	createEmpURL: "/employee/addEmp",
	updateEmpURL: "/employee/updateEmployee",
	deleteEmpURL: "/employee/deleteEmployee",

	// Search employee
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

};
