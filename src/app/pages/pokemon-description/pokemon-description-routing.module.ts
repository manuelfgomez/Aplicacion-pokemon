import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonDescriptionPage } from './pokemon-description.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDescriptionPageRoutingModule {}
