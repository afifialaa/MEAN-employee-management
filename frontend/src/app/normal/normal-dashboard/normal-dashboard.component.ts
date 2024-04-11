import { Component } from '@angular/core';

@Component({
    selector: 'app-normal-dashboard',
    templateUrl: './normal-dashboard.component.html',
    styleUrls: ['./normal-dashboard.component.css']
})
export class NormalDashboardComponent {
    title1: string = 'E-Requests'
    data1: string = 'pending'
    url1: string = ''

    title2: string = 'Forms'
    data2: string = 'placeholder'
    url2: string = ''

    title3: string = 'News'
    data3: string = '0'
    url3: string = ''

    title4: string = 'Events'
    data4: string = 'up coming 0'
    url4: string = ''

    title5: string = 'Tasks'
    data5: string = 'pending '
    url5: string = ''

    title6: string = 'Self-Service Center'
    data6: string = 'visit'
    url6: string = ''

}
