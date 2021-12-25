import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from  '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:HttpClient) { }
    
  sendMessage(message){
    return this.http.post(environment.sendMessageURL, message);
  }
}
