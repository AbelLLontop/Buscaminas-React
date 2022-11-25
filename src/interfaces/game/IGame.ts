import {ICell } from './ICell';
import { Nivel } from "./INivel";

export enum STATUS_GAME{
    PLAYING,
    WIN,
    LOSE
}

export interface IGameState {
    cells: ICell[];
    firstClick: boolean;
    level: Nivel;
    stateGame:STATUS_GAME;
  }