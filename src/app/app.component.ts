import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  pockemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  input: number;
  ngOnInit(): void {
    console.table(this.pockemonList);
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
    // ça c'est la syntaxe des backtik qui permet d'ajouter une variable dynamique et remplace la concaténation avec le "+"
  }
}
