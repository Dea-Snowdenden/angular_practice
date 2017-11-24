import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [
    new User(1, "First", "Last", "email@example.com"),
    new User(2, "First", "Last", "email@example.com"),
    new User(3, "First", "Last", "email@example.com"),
  ];

  constructor(private _userService: UserService) {

   }

  ngOnInit() {
  }

  getUsers(){
  //  this._userService.getUsers()
  //  .then(users => this.users =  users)
  }

}
