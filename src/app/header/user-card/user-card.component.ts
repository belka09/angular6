import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input('user') user;

  constructor() {
    console.log(`constructor: ${this.user}`);
  }

  ngOnInit() {
    console.log(`onInit: ${this.user}`);
  }

}
