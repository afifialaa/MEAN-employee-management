import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

    msg: string;
    errMsg: string;

    chatForm: FormGroup;


  constructor(private chatSrvc:ChatService) { }

  ngOnInit() {
      this.chatForm = new FormGroup({
        message: new FormControl('')
      })
  }

  sendMessage(){
      let message = {
        message: this.chatForm.value.message
      }

      this.chatSrvc.sendMessage(message).subscribe(data => {
          if(data['err']){
                console.log('faild to send message');
           }else{
                console.log('Message was sent successfully');
            }
      });
  }

}
