import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from './../user';
import { MatInputModule, MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

//  first_name: string; 

  newUser = new User();
  @Output() createNewUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
//    this.first_name= 'minion'
  }

  create(){
  // call server to save
    this.createNewUserEvent.emit(this.newUser);
    this.newUser= new User();
  }

}
