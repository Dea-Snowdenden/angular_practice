import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngInit ran...');

    this.name = 'Minion';
    this.age = 20;
    this.email = 'minion@email.com';
    this.address = {
      street:'50 main st',
      city: 'San Jose',
      state: 'California'
    }
    this.hobbies = ['code', 'watch TV', 'bake hardiharhar'];
    this.hello = '124 hello';
    this.dataService.getPosts().subscribe((posts) => {
    //  console.log(posts);
    this.posts = posts;
    });
  }
onClick(){
  this.name='Dea Lorenzo';
  this.hobbies.push('New hobby');
}

addHobby(hobby){
//  console.log(hobby);
  this.hobbies.unshift(hobby);
  return false;
}
deleteHobby(i){
// console.log(hobby);
//  for(let i = 0;i <this.hobbies.length;i++){
//  if(this.hobbies[i] == hobby){
//   this.hobbies.splice(i, 1);
 // }
// }
this.hobbies.splice(i, 1);
}
  toggleEdit(){
    this.isEdit =!this.isEdit;
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  userID:number,
  id:number,
  title:string,
  body:string
}