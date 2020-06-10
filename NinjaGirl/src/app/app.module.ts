import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { LevelOneComponent } from './levels/level-one/level-one.component';
import { LevelTwoComponent } from './levels/level-two/level-two.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LevelOneComponent,
    LevelTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
