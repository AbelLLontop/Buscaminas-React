
export enum EnumGameState{
    PLAYING,
    PAUSE,
    FINIsH
}

export interface IGameStore{
    state:EnumGameState 
} 