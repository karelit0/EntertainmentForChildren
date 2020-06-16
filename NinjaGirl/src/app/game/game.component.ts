import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import Phaser from "phaser";
import { ScoreService } from "../services/score.service";
import { GameOptions } from "../phaser-extensions/game-options";
import { StageTemplate } from "../stage/stage_template";
import { StageOneSettings } from "../stage-settings/stage-one.settings";
import { StageTwoSettings } from "../stage-settings/stage-two.settings";
import { StageThreeSettings } from "../stage-settings/stage-three.settings";
import { StageEnumMap } from "../enumerations/stage-enum.map";
import { StageEnum } from "../enumerations/stage.enum";
import { StageFourSettings } from "../stage-settings/stage-four.settings";
import { StageFiveSettings } from "../stage-settings/stage-five.settings";
import { StageSixSettings } from "../stage-settings/stage-six.settings";
import { StageSevenSettings } from "../stage-settings/stage-seven.settings";
import { StageEightSettings } from "../stage-settings/stage-eight.settings";
import { StageNineSettings } from "../stage-settings/stage-nine.settings";
import { StageTenSettings } from "../stage-settings/stage-ten.settings";
import { StageElevenSettings } from "../stage-settings/stage-eleven.settings";
import { StageTwelveSettings } from "../stage-settings/stage-twelve.settings";
import { StageThirteenSettings } from "../stage-settings/stage-thirteen.settings";
import { StageFourteenSettings } from "../stage-settings/stage-fourteen.settings";
import { StageSixteenSettings } from "../stage-settings/stage-sixteen.settings";
import { StageSeventeenSettings } from "../stage-settings/stage-seventeen.settings";
import { StageEighteenSettings } from "../stage-settings/stage-eighteen.settings";
import { StageNineteenSettings } from "../stage-settings/stage-nineteen.settings";
import { StageFifteenSettings } from "../stage-settings/stage-fifteen.settings";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor(private scoreService: ScoreService) {}

  ngOnInit() {
    const stageEnumMap: StageEnumMap = new StageEnumMap();

    this.config = {
      type: Phaser.WEBGL,
      width: GameOptions.width,
      height: GameOptions.height,
      scale: {
        parent: "scene-container",
        mode: Phaser.Scale.CENTER_BOTH,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: {
            y: GameOptions.gravity,
          },
          // debug: true
        },
      },
    };

    this.phaserGame = new Phaser.Game(this.config);
    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageOne),
      new StageTemplate<StageOneSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageOne),
        StageOneSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageTwo),
      new StageTemplate<StageTwoSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageTwo),
        StageTwoSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageThree),
      new StageTemplate<StageThreeSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageThree),
        StageThreeSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageFour),
      new StageTemplate<StageFourSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageFour),
        StageFourSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageFive),
      new StageTemplate<StageFiveSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageFive),
        StageFiveSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageSix),
      new StageTemplate<StageSixSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageSix),
        StageSixSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageSeven),
      new StageTemplate<StageSevenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageSeven),
        StageSevenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageEight),
      new StageTemplate<StageEightSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageEight),
        StageEightSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageNine),
      new StageTemplate<StageNineSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageNine),
        StageNineSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageTen),
      new StageTemplate<StageTenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageTen),
        StageTenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageEleven),
      new StageTemplate<StageElevenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageEleven),
        StageElevenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageTwelve),
      new StageTemplate<StageTwelveSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageTwelve),
        StageTwelveSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageThirteen),
      new StageTemplate<StageThirteenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageThirteen),
        StageThirteenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageFourteen),
      new StageTemplate<StageFourteenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageFourteen),
        StageFourteenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageFifteen),
      new StageTemplate<StageFifteenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageFifteen),
        StageFifteenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageSixteen),
      new StageTemplate<StageSixteenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageSixteen),
        StageSixteenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageSeventeen),
      new StageTemplate<StageSeventeenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageSeventeen),
        StageSeventeenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageEighteen),
      new StageTemplate<StageEighteenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageEighteen),
        StageEighteenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.add(
      stageEnumMap.MapToString.get(StageEnum.stageNineteen),
      new StageTemplate<StageNineteenSettings>(
        stageEnumMap.MapToString.get(StageEnum.stageNineteen),
        StageNineteenSettings
      ),
      false,
      null
    );

    this.phaserGame.scene.start(
      stageEnumMap.MapToString.get(StageEnum.stageOne),
      this.scoreService
    );
  }
}
