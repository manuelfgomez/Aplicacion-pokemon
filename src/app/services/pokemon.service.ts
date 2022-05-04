import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(`${environment.apiUrl}?limit=20`);
  }

  getPokemon(name:string){
    return this.http.get(`${environment.apiUrl}/${name}`);
  }
  
}
