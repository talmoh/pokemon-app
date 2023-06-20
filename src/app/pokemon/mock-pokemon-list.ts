import { Pokemon } from "./pokemon";

//ici on a typé les information on disant a typescript que la constante pokemons est de type pockemon dans un tableau []
export const POKEMONS: Pokemon[] = [
  {
    id: 1,
    name: "Bulbizarre",
    hp: 25,
    cp: 5,
    picture: "https://media.tenor.com/NKYl1uk-YkIAAAAi/running-crazy-eyes.gif",
    // "https://media.tenor.com/jSdKDK3vgC4AAAAC/bulbasaur-pokemon.gif",
    //"https://media.tenor.com/6GYLcQPTRHgAAAAi/bulbizarre-bulbasaur.gif",
    /*"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",*/
    types: ["Plante", "Poison"],
    created: new Date(),
  },
  {
    id: 2,
    name: "Salamèche",
    hp: 28,
    cp: 6,

    picture: "https://media.tenor.com/2QnO8DZekF4AAAAi/charmander-pokemon.gif",
    // "https://media.tenor.com/cybdHYBCerIAAAAi/pokemon-charmander.gif",
    // "https://media.tenor.com/hLfJG3B_ZLIAAAAi/charmander-gif-pokemon.gif",
    // "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    types: ["Feu"],
    created: new Date(),
  },
  {
    id: 3,
    name: "Carapuce",
    hp: 21,
    cp: 4,
    picture:
      "https://media.tenor.com/7c-SsbAcK9oAAAAi/pok%C3%A9mon-schildkr%C3%B6te.gif",
    // "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
    types: ["Eau"],
    created: new Date(),
  },
  {
    id: 4,
    name: "Aspicot",
    hp: 16,
    cp: 2,
    picture: "https://media.tenor.com/NpktfBjOmgQAAAAC/paulinaspicot.gif",
    // "https://media.tenor.com/8ZSMroJFkiwAAAAi/shiny-weedle-anime.gif",
    // "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
    types: ["Insecte", "Poison"],
    created: new Date(),
  },
  {
    id: 5,
    name: "Roucool",
    hp: 30,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
    types: ["Normal", "Vol"],
    created: new Date(),
  },
  {
    id: 6,
    name: "Rattata",
    hp: 18,
    cp: 6,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
    types: ["Normal"],
    created: new Date(),
  },
  {
    id: 7,
    name: "Piafabec",
    hp: 14,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",
    types: ["Normal", "Vol"],
    created: new Date(),
  },
  {
    id: 8,
    name: "Abo",
    hp: 16,
    cp: 4,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
    types: ["Poison"],
    created: new Date(),
  },
  {
    id: 9,
    name: "Pikachu",
    hp: 21,
    cp: 7,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    types: ["Electrik"],
    created: new Date(),
  },
  {
    id: 10,
    name: "Sabelette",
    hp: 19,
    cp: 3,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",
    types: ["Normal"],
    created: new Date(),
  },
  {
    id: 11,
    name: "Mélofée",
    hp: 25,
    cp: 5,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",
    types: ["Fée"],
    created: new Date(),
  },
  {
    id: 12,
    name: "Groupix",
    hp: 17,
    cp: 8,
    picture:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",
    types: ["Feu"],
    created: new Date(),
  },
];
