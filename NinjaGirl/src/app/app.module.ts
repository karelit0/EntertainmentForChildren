import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GameComponent } from "./game/game.component";
import { ScoreService } from "./services/score.service";
import { GameInstructionsComponent } from "./game-instructions/game-instructions.component";

@NgModule({
  declarations: [AppComponent, GameInstructionsComponent, GameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ScoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
