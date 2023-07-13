import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.URL_BASE;

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http:HttpClient) {}

  getCharacters(){
    return this.http.get(`${url_base}character`);
  }

  getCharacterDetais(charId:number){
    return this.http.get(`${url_base}character/${charId}`)
  }
}
