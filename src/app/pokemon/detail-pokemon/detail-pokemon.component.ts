import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";
@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
})
export class DetailPokemonComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {}
  //activatedRoute permet d'avoir accés a la route courante
  
  ngOnInit() {
    this.pokemonList=POKEMONS;
    const pokemonId: String|null = this.route.snapshot.paramMap.get('id');
    // avec cette constante on accéde au route, snapshot nous permet davoir la donnée a l'instant T des paramètre de ce qu'on appel des paramMap, qui est une sorte de tableau avec tout les paramètre de notre url
    if(pokemonId){
    this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemon']);
  }
}
