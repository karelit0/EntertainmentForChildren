import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService {
  score: number;
  stage: number;

  constructor() {
    this.score = 0;
    this.stage = 1;
  }
}
