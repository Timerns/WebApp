import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = false
  authUser:any = false

  constructor() {}

  ngOnInit(): void {
  }
  
  burgerNav() {
    this.links = !this.links
    console.log(this.links)
  }


}
