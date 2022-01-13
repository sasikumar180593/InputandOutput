import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../models/userProfile';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  iseditable: boolean = false;
  // name: string = 'sasi';
  // number: string = '8754194723';
  // Address: string = 'Villupuram';
  // emailID: string = 'sasikumar180593@gmail.com';
  userDetails: UserProfile = new UserProfile();

  constructor() {
    this.userDetails.name = 'sasi';
    this.userDetails.number = '8754194723';
    this.userDetails.address = 'Villupuram';
    this.userDetails.emailID = 'sasikumar180593@gmail.com';
  }

  ngOnInit(): void {
  }

  editedVal(event: any) {
    this.userDetails.name = event.name;
    alert("------------"+event.number)
    this.userDetails.number = event.number;
    this.userDetails.address = event.address;
    this.userDetails.emailID = event.emailID;
    this.iseditable = false;
  }
  edit() {

    this.iseditable = true;
  }

}
