import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;
  constructor(private dataService: DataService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'John Doe';
    this.age = 42;
    this.email = 'test@test.com';
    this.address = {
      street: '320 Spencer st',
      city: 'Melbourne',
      state: 'VIC'
    };
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Tomomi chan';
    this.hobbies.push(String(Math.random()));
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

   deleteHobby(hobby, i) {
      console.log(hobby, i);
      this.hobbies.splice(i, 1);
   }

   toggleEdit() {
      this.isEdit = !this.isEdit
   }


}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
