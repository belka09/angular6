import { Component, OnInit, Input ,EventEmitter} from '@angular/core';
import { Output } from "@angular/core";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user;
  @Output('userSelected') userSelected: EventEmitter<any> = new EventEmitter;

  constructor() {
    console.log(`constructor: ${this.user}`);
  }

  ngOnInit() {
    console.log(`onInit: ${this.user}`);
  }

  selectUser(){
    this.userSelected.emit();
  }
}
