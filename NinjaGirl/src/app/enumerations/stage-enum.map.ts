import { StageEnum } from "./stage.enum";

export class StageEnumMap {
  MapToString: Map<StageEnum, string>;
  MapToEnum: Map<string, StageEnum>;

  constructor() {
    this.MapToString = new Map<StageEnum, string>([
      [StageEnum.stageOne, "stage_one"],
      [StageEnum.stageTwo, "stage_two"],
      [StageEnum.stageThree, "stage_three"],
      [StageEnum.stageFour, "stage_four"],
      [StageEnum.stageFive, "stage_five"],
      [StageEnum.stageSix, "stage_six"],
      [StageEnum.stageSeven, "stage_seven"],
      [StageEnum.stageEight, "stage_eight"],
      [StageEnum.stageNine, "stage_nine"],
      [StageEnum.stageTen, "stage_ten"],
      [StageEnum.stageEleven, "stage_eleven"],
      [StageEnum.stageTwelve, "stage_twelve"],
      [StageEnum.stageThirteen, "stage_thirteen"],
      [StageEnum.stageFourteen, "stage_fourteen"],
      [StageEnum.stageFifteen, "stage_fifteen"],
      [StageEnum.stageSixteen, "stage_sixteen"],
      [StageEnum.stageSeventeen, "stage_seventeen"],
      [StageEnum.stageEighteen, "stage_eighteen"],
      [StageEnum.stageNineteen, "stage_nineteen"],
    ]);

    this.MapToEnum = new Map<string, StageEnum>([
      ["stage_one", StageEnum.stageOne],
      ["stage_two", StageEnum.stageTwo],
      ["stage_three", StageEnum.stageThree],
      ["stage_four", StageEnum.stageFour],
      ["stage_five", StageEnum.stageFive],
      ["stage_six", StageEnum.stageSix],
      ["stage_seven", StageEnum.stageSeven],
      ["stage_eight", StageEnum.stageEight],
      ["stage_nine", StageEnum.stageNine],
      ["stage_ten", StageEnum.stageTen],
      ["stage_eleven", StageEnum.stageEleven],
      ["stage_twelve", StageEnum.stageTwelve],
      ["stage_thirteen", StageEnum.stageThirteen],
      ["stage_fourteen", StageEnum.stageFourteen],
      ["stage_fifteen", StageEnum.stageFifteen],
      ["stage_sixteen", StageEnum.stageSixteen],
      ["stage_seventeen", StageEnum.stageSeventeen],
      ["stage_eighteen", StageEnum.stageEighteen],
      ["stage_nineteen", StageEnum.stageNineteen],
    ]);
  }
}
