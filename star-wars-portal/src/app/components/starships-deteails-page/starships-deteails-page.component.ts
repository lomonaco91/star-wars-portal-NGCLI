import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../../services/starship.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starships-deteails-page',
  templateUrl: './starships-deteails-page.component.html',
  styleUrls: ['./starships-deteails-page.component.css'],
  providers: [StarshipService]
})
export class StarshipsDeteailsPageComponent implements OnInit {

  starship:any = {};

  constructor(
    private _starshipService: StarshipService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getStarshipID();
  }

  getStarshipID() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._starshipService.getStarshipId(id)
    .subscribe(result => {
      this.starship = result;
      console.log(result);
    }, error => {
      console.error(error);
    })
  }

}
