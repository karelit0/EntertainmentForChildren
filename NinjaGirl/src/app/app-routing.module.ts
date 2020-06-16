import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { GameInstructionsComponent } from "./game-instructions/game-instructions.component";

const routes: Routes = [
  { path: "", redirectTo: "/game-instructions", pathMatch: "full" },
  { path: "game-instructions", component: GameInstructionsComponent },
  { path: "game", component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
