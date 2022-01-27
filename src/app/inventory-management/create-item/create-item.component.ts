import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-item',
    templateUrl: './create-item.component.html',
    styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

    createProductForm: FormGroup;
    errMsg:string;
    msg:string;

    constructor(private invSrvc:InventoryService) { }

    ngOnInit() {
        this.createProductForm = new FormGroup({
            name: new FormControl(''),
            description: new FormControl(''),
            quantity: new FormControl(''),
            price: new FormControl(''),
            status: new FormControl(''),
            supplier: new FormControl(''),
        });
    }

    createProduct(): void{
        let product = {
            name: this.createProductForm.value.name,
            description: this.createProductForm.value.description,
            quantity: this.createProductForm.value.quantity,
            price: this.createProductForm.value.price,
            status: this.createProductForm.value.status,
            supplier_id: this.createProductForm.value.supplier,
        }

        this.invSrvc.createProduct(product).subscribe(
            (data)=>{
                this.errMsg = '';
                this.msg = 'Product was added'
            },
            (error)=>{
                this.msg = '';
                this.errMsg = 'Failed to add product';
            }
        )
    }

}
