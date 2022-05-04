import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonDescriptionPageRoutingModule } from './pokemon-description-routing.module';

import { PokemonDescriptionPage } from './pokemon-description.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonDescriptionPageRoutingModule
  ],
  declarations: [PokemonDescriptionPage, HeaderComponent]
})
export class PokemonDescriptionPageModule {}
