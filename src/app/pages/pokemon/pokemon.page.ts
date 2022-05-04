import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  name:string = "";
  pokemons:any[] = [];
  textSearch:string = "";
  showDiv:boolean = false;
  constructor( private pokemonService: PokemonService, private loading: LoadingService) { }

  ngOnInit() {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.loading.presentLoading();
    this.pokemonService.getPokemons().subscribe( (response:any) =>{
      response.results.map(
        pokemon => {
          this.pokemonService.getPokemon(pokemon.name).subscribe( (response:any) =>{
            let pokemon = {
              id : response.id,
              name: response.name,
              img: response.sprites.other.home.front_default
            }
            this.pokemons = [...this.pokemons, pokemon];
            this.loading.closeLoading();
          })
        }
      )
    }, (err:any)=>{
      console.log(err);
      this.showDiv = true;
      this.loading.closeLoading();
    })
  }

  getPokemon(name:string){
    let namePokemon = name.toLocaleLowerCase();
    this.pokemonService.getPokemon(namePokemon).subscribe( (response:any) =>{
      let pokemon = {
        id : response.id,
        name: response.name,
        img: response.sprites.other.home.front_default
      }
      let found = this.pokemons.find(function(element) {
        return element.id === pokemon.id;
      });
      if( !found ){
        this.pokemons = [...this.pokemons, pokemon];
      }
      
    }, (err:any) =>{
        this.pokemons = [];
        this.showDiv = true;
        console.log(err);
    })
  }

  search(event){
    this.textSearch = event.target.value;
    this.showDiv = true;
  }

  clear(){
    this.name = "";
    this.textSearch = "";
    this.pokemons = [];
    this.getAllPokemons();
  }

}
