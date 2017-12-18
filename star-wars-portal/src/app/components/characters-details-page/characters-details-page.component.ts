import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-details-page',
  templateUrl: './characters-details-page.component.html',
  styleUrls: ['./characters-details-page.component.css'],
  providers: [CharactersService]
})
export class CharactersDetailsPageComponent implements OnInit {

  character:any = {};

  constructor(
    private _charcaterService: CharactersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._charcaterService.getCharacter(id)
    .subscribe(result => {
      this.character =result;
      console.log(result);
    }, error => {
      console.error(error);
    })
  }

}
