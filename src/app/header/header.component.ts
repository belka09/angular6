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

  public myClass = 'red';

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
