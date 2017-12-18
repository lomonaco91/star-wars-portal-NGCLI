import { Component, ViewChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class SidenavComponent implements OnInit {

  @ViewChild('navMenu') navMenu: any;
  @ViewChild('navContent') navContent: any;

 // @Input listData: any[];
  navbarCollapsed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    if(!this.navContent.nativeElement.contains(event.target) && !this.navbarCollapsed){
      this.navbarCollapsed = true;
    }
  }

}
