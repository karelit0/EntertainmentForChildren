import { EnemyEnum } from "./enemy.enum";

export class EnemyEnumMap {
  MapToString: Map<EnemyEnum, string>;
  MapToEnum: Map<string, EnemyEnum>;

  constructor() {
    this.MapToString = new Map<EnemyEnum, string>([
      [EnemyEnum.lemonGreen, "enemy_green"],
      [EnemyEnum.orange, "enemy_orange"],
      [EnemyEnum.purple, "enemy_purple"],
      [EnemyEnum.red, "enemy_red"],
      [EnemyEnum.rose, "enemy_rose"],
    ]);

    this.MapToEnum = new Map<string, EnemyEnum>([
      ["enemy_green", EnemyEnum.lemonGreen],
      ["enemy_orange", EnemyEnum.orange],
      ["enemy_purple", EnemyEnum.purple],
      ["enemy_red", EnemyEnum.red],
      ["enemy_rose", EnemyEnum.rose],
    ]);
  }
}
