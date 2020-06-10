import { Component, OnInit } from '@angular/core';
import { MainScene } from '../scene/main-scene';
import Phaser from 'phaser';
import { GameOptions } from '../game-tools/game-options';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {

    this.config = {
      type: Phaser.AUTO,
      width: GameOptions.width,
      height: GameOptions.height,
      scene: [MainScene],
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: GameOptions.gravity
          },
          debug: true
        }
      },
    };
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }
}