import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) { }

    classy: string = 'not-shown'
    isShown: boolean = false

    showUserIcon: boolean = false


    change_style() {
        this.isShown = !this.isShown
        this.isShown ? this.classy = 'shown' : this.classy = 'not-shown'
    }

    logout() {
        localStorage.clear()
        this.router.navigate(['/'])
    }

    ngOnInit() {
        if(localStorage.getItem('token') != null){
            this.showUserIcon = true
        }
    }

}
