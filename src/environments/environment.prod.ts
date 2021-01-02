export const environment = {
	production: true,

		/* Account api */
		loginUrl: '/account/login',
		signupUrl: '/user/signup',
	
		/* Dashboard api */
		getEmployeesNumURL: '/dashboard/getEmployeesNum',
		getUsersNumURL: '/dashboard/getUsersNum',
		getDepartmentsNumURL: '/dashboard/getDepartmentsNum',
	
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

};
