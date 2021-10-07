import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-inventory-card',
    templateUrl: './inventory-card.component.html',
    styleUrls: ['./inventory-card.component.css']
})
export class InventoryCardComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit() {
    }

    /* @HostListener("click") onClick() {
        this.router.navigate(['/admin/inventory/create']);
    }*/

}
