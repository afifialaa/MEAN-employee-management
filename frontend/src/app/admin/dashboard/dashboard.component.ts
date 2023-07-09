import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  employeeTitle = 'Employee'
  employeeData = 100
  employeeUrl = '/admin/employee/dashboard'


  inventoryTitle = 'Inventory'
  inventoryData = 100
  inventoryUrl = '/admin/inventory'
}
