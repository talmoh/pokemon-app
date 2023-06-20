import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ListPockemonComponent } from "./pokemon/list-pockemon/list-pockemon.component";
// import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  // { path: "pokemon", component: ListPockemonComponent },
  // { path: "pokemon/:id", component: DetailPokemonComponent }, //on rajoute aprés le chemin de notre route un slash id pour dir a angular que aprés le slash on aura un identifiant
  { path: "", redirectTo: "pokemon", pathMatch: "full" }, //dans cette route on met une url vide par défaut puis on redérige vers notre page de liste de pokemon. le pathMatch permet d'éviter d'avoir des conflit entre les routes
  { path: "**", component: PageNotFoundComponent }, //l'opérateur double étoile intercept les routes et les redirige vers le composant pageNotFound, il ne faut pas mettre cette route en premier sinon l'opérateur ** va intercept toute les autre route et on aura tout le temp un page not found
];
// les routes sont lu de haut en bas, il faut donc mettre les routes plus spécifique en haut ensuite les routes plus global en bas
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
