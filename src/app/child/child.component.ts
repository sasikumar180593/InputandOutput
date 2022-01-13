import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserProfile } from '../models/userProfile';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() userD: UserProfile= new UserProfile();
  // @Input() name: string = '';
  // @Input() numb: string = '';
  // @Input() address: string = '';
  // @Input() email: string = '';
  @Output() opt: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submit() {

    // let obj = { 'name': this.userD.name, 'numb': this.userD.number, 'add': this.userD.Address, 'mail': this.userD.emailID }
   let obj = new UserProfile();
   obj.name=this.userD.name;
   obj.number=this.userD.number;
   obj.address=this.userD.address;
   obj.emailID=this.userD.emailID;
    this.opt.emit(obj);
  }

}
