import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    employeeTitle = 'Employee'
    employeeData = '100'
    employeeUrl = '/admin/employee/dashboard'

    userTitle = 'User'
    userData = '100'
    userURL = '/admin/user'


    inventoryTitle = 'Inventory'
    inventoryData = '100'
    inventoryUrl = '/admin/inventory'

    eRequestsTitle = 'E-Requests'
    eRequestsData = '10'
    eRequestsURL = '/admin/inventory'

    departmentsTitle = 'Departments'
    departmentsData = '10'
    departmentsURL = '/admin/department/create'
}
