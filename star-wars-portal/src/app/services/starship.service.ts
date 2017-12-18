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

  private characterUrl = 'https://swapi.co/api/starships'; 

  getCharacters (page?:number):Observable<Starship[]> {
    let url = this.characterUrl;
    if (page) url += `?page=${page}`;
    return this.http.get(url)
      .map((res:Response) =>  res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCharacter(id) {
    return this.http.get(`${this.characterUrl}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
