const PORT = 8000;

export const environment = {
  production: false,

  /* Account api */
  loginUrl: `http://localhost:${PORT}/api/v1/account/login`,
  signupUrl: `http://localhost:${PORT}/api/v1/account/register`,
  getUser: `http://localhost:${PORT}/api/v1/account/user`,
  forgotUrl: `http://localhost:${PORT}/account/forgot`,
  checkResetTokenUrl: `http://localhost:${PORT}/api/v1/account/checkResetToken`,
  resetPasswordUrl: `http://localhost:${PORT}/api/v1/account/resetPassword`,

  /* Dashboard api */
  employeesNumURL: `http://localhost:${PORT}/api/v1/dashboard/employeesNum`,
  usersNumURL: `http://localhost:${PORT}/api/v1/dashboard/usersNum`,
  departmentsNumURL: `http://localhost:${PORT}/api/v1/dashboard/departmentsNum`,
  tasksNumURL: `http://localhost:${PORT}/api/v1/dashboard/tasksNum`,

  /* Employee api */
  employeeURL: `http://localhost:${PORT}/api/v1/employee/`,

  /* User api */
  // userURL: `http://localhost:${PORT}/api/v1/account/register`,
  userURL: `http://localhost:${PORT}/api/v1/user/`,

  /* Department api */
  departmentURL: `http://localhost:${PORT}/api/v1/department/`,
  teamURL: `http://localhost:${PORT}/api/v1/department/team`,
  positionURL: `http://localhost:${PORT}/api/v1/department/team/position`,
  departmentListURL: `http://localhost:${PORT}/api/v1/department/departmentsList`,
  teamListURL: `http://localhost:${PORT}/api/v1/department/teamsList`,
};
