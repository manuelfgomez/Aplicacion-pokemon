import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    
  ],
  declarations: [PokemonPage, HeaderComponent, FilterPipe]
})
export class PokemonPageModule {}
