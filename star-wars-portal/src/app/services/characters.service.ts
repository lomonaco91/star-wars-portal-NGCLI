import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Character } from '../models/character';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CharactersService {

  constructor(private http: Http) { }

  private characterUrl = 'https://swapi.co/api/people'; 

  getCharacters (page?:number):Observable<Character[]> {
    let url = this.characterUrl;
    if (page) url += `?page=${page}`;
    console.log(page, url)
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
