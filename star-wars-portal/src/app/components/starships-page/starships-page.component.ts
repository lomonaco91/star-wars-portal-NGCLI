import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../../services/starship.service';

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
  constructor(private _starshipService: StarshipService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.loading = true;
    this._starshipService.getStarship(this.page)
    .subscribe(result => {
      this.loading = false;
      this.starshipList = this.formatData(result['results']);
      this.starshipHeaders = Object.keys(this.starshipList[0]);
    }, error => {
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
