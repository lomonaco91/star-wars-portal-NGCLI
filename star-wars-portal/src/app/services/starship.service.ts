import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Starship } from '../models/starship';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StarshipService {

  constructor(private http: Http) { }

  private starshipUrl = 'https://swapi.co/api/starships'; 

  getStarship (page?:number):Observable<Starship[]> {
    let url = this.starshipUrl;
    if (page) url += `?page=${page}`;
    return this.http.get(url)
      .map((res:Response) =>  res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getStarshipId(id) {
    return this.http.get(`${this.starshipUrl}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
