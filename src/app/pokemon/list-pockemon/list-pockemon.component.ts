import { Component } from "@angular/core";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-pockemon",
  templateUrl: "./list-pockemon.component.html",
})
export class ListPockemonComponent {
  pockemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  input: number;

  constructor(private router: Router) {}

  goToPokemone(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }

  selectPockemon(pokemonId: string) {
    // const index: number = +(event.target as HTMLInputElement).value; //l'opérateur + ici nous permet de transformer la chaine de caractère htmlelement.value en un nombre
    const id = +pokemonId;
    const pokemon: Pokemon | undefined = this.pockemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );
    if (pokemon) {
      console.log(`vous avez demander le pockémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`vous avez demander un pockémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
