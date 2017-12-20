import { Component, OnInit } from '@angular/core';
import { Broadcaster } from '../../../classes/broadcaster'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading:boolean = false;
  constructor(private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.broadcaster.on('loading')
    .subscribe(data => {
      this.loading = data ? true : false
    })
  }

}
