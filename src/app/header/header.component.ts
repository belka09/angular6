import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user = {
    name: 'Dima',
    age: 24
  };

  public users = [
    {
      name:'Dima'
    },
    {
      name:'Alise'
    },
    {
      name:'Alex'
    }
  ]
  public isShow = true;
  public myClass = 'red';
  public selectedUser;

  public myColor = 'yellow';

  constructor() {
  }

  ngOnInit(): void {
  }

  random() {
    return Math.random();
  }

  changeColor(color) {
    this.myColor = color;
  }
}
