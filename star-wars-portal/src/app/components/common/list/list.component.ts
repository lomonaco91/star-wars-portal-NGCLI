import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() headers:string[];
  @Input() listData:any;
  @Input() actions:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sortData(key) {
    this.listData.sort((a, b) => a[key] > b[key] ? 1 : -1);
  }

}
