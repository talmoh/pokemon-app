import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPockemonComponent } from "./list-pockemon/list-pockemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";

const PokemonRoutes: Routes = [
  { path: "pokemon", component: ListPockemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent }, //on rajoute aprés le chemin de notre route un slash id pour dir a angular que aprés le slash on aura un identifian
];
@NgModule({
  declarations: [
    ListPockemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(PokemonRoutes)],
})
export class PokemonModule {}
