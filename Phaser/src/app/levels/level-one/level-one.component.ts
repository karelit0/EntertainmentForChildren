import { Component, OnInit } from '@angular/core';
import { MainScene } from 'src/app/scene/main-scene';
import Phaser from 'phaser';

@Component({
  selector: 'app-levels-level-one',
  templateUrl: './level-one.component.html'
})
export class LevelOneComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {

  }

  ngOnInit() {
  }
}