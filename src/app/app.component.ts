import { Component,Input } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public messagesService: MessagesService){

  }

  title = 'ep3';  
  
  
}
