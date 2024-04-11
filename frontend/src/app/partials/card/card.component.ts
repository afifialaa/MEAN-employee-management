import { Component, Input } from '@angular/core';
import { HostListener } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() title: string = ''
    @Input() data: string = '0'
    @Input() url: string = '#'

    constructor(private router: Router) { }

    @HostListener("click") onClick() {
        this.router.navigate([this.url]);
    }
}
