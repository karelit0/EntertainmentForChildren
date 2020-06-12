import { Enemy } from './enemy.enum';

export class EnemyMap {
    MapToString: Map<Enemy, string>;
    MapToEnum: Map<string, Enemy>;

    constructor() {
        this.MapToString = new Map<Enemy, string>([
            [Enemy.lemonGreen, 'enemy_green'],
            [Enemy.orange, 'enemy_orange'],
            [Enemy.purple, 'enemy_purple'],
            [Enemy.red, 'enemy_red'],
            [Enemy.rose, 'enemy_rose'],
        ]);

        this.MapToEnum = new Map<string, Enemy>([
            ['enemy_green', Enemy.lemonGreen],
            ['enemy_orange', Enemy.orange],
            ['enemy_purple', Enemy.purple],
            ['enemy_red', Enemy.red],
            ['enemy_rose', Enemy.rose],
        ]);
    }
}