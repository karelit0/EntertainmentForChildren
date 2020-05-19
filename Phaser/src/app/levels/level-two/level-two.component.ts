import { Component, OnInit } from '@angular/core';
import { MainScene } from 'src/app/scene/main-scene';
import Phaser from 'phaser';

@Component({
  selector: 'app-levels-level-two',
  templateUrl: './level-two.component.html',
})
export class LevelTwoComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {

  }

  ngOnInit() {
  }
}