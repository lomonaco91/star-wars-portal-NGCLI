import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../../services/starship.service';
import { Broadcaster } from '../../classes/broadcaster'

@Component({
  selector: 'app-starships-page',
  templateUrl: './starships-page.component.html',
  styleUrls: ['./starships-page.component.css'],
  providers: [StarshipService]
})
export class StarshipsPageComponent implements OnInit {

  loading: boolean = false;
  page:number;
  starshipHeaders : string[];
  starshipList : any[];
  constructor(private _starshipService: StarshipService, private broadcaster: Broadcaster) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.broadcaster.broadcast('loading', true);
    this._starshipService.getStarship(this.page)
    .subscribe(result => {
      this.broadcaster.broadcast('loading', false);
      this.starshipList = this.formatData(result['results']);
      this.starshipHeaders = Object.keys(this.starshipList[0]);
    }, error => {
      this.broadcaster.broadcast('loading', false);
      console.error(error);
    })
  }

  formatData(data) {
    return data.map((d, i) => {
      let id = d.url.split('/')[5];
      return {
        id: id,
        name: d.name
      }
    })
  }

  setPage(pageNumber) {
    if (pageNumber > 0 && pageNumber < 10) {
      this.page = pageNumber;
      this.getList();
    }
  }

}
