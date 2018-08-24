import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iasub-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean

  constructor() { }

  ngOnInit() {
  }

}
