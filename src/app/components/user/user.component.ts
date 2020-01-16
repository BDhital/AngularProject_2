import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'cluster';
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
  hello: any;



  constructor(private dataService: DataService) {
    console.log('constructor ran..');
   }

  ngOnInit() {
    console.log('ngOnInit ran..');

    this.name = 'Bhola Dhit';
    this.age = 25;
    this.email = 'test@test.com';
    this.address = {
      street: '50 Main st',
      city: 'Charlotte',
      state: 'NC'
    };

    this.hobbies = ['Write Code', 'Watch Movie', 'Listen to Music'];
    this.hello = 'hello';
  }

  onClick(){
    console.log('HELLO');
  }

  addHobby(hobby: string){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;

  }

  deleteHobby(hobby){
    for(let i = 0;i <this.hobbies.length;i++) {
      if(this.hobbies[i] === hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }





}

interface Address {
  street: string;
  city: string;
  state: string;
}
