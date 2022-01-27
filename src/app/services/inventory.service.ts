import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from '../../environments/environment.dev';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {

    constructor(private http:HttpClient) { }

    createProduct(product){
        return this.http.post(environment.createProductURL, product);
    }
}
