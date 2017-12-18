import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css'],
  providers: [CharactersService]
})
export class CharactersPageComponent implements OnInit {

  loading: boolean = false;
  page:number;
  charactersHeaders : string[];
  charactersList : any[];
  constructor(private _charcaterService: CharactersService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.loading = true;
    this._charcaterService.getCharacters(this.page)
    .subscribe(result => {
      this.loading = false;
      this.charactersList = this.formatData(result['results']);
      this.charactersHeaders = Object.keys(this.charactersList[0]);
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
