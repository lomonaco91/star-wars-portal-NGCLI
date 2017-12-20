import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';
import { Broadcaster } from '../../classes/broadcaster';

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
    private route: ActivatedRoute,
    private broadcaster: Broadcaster
  ) { }

  ngOnInit() {
    this.getCharacter();
  }

  getCharacter() {
    this.broadcaster.broadcast('loading', true);
    const id = +this.route.snapshot.paramMap.get('id');
    this._charcaterService.getCharacter(id)
    .subscribe(result => {
      this.broadcaster.broadcast('loading', false);
      this.character = result;
    }, error => {
      this.broadcaster.broadcast('loading', false);
      console.error(error);
    })
  }

}
