import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.page.html',
  styleUrls: ['./pokemon-description.page.scss'],
})
export class PokemonDescriptionPage implements OnInit {
  pokemon:any;
  name:string;
  constructor( private route : ActivatedRoute, private pokemonService: PokemonService) {
    this.name = "";
    this.pokemon = {};
   }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getPokemon(this.name);
  }

  getPokemon(name:string){
    this.pokemonService.getPokemon(name).subscribe( (response:any) =>{
      this.pokemon = {
        id : response.id,
        name: response.name,
        img: response.sprites.other.home.front_default,
        stats: response.stats
      }
    }, (err:any) =>{
        console.log(err);
    })
  }

}
