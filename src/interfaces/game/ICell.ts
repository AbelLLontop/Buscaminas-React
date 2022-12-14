export type CellMap = Map<string, ICell>;

export enum STATUS_CELL{
    OPEN,
    CLOSED,
    MARKED,
    INACTIVE              
}

export enum STATUS_MINE{
    ACTIVE,
    INACTIVE
}

export interface ICell{
    id:string,
    status:STATUS_CELL,
    mine:STATUS_MINE,
    content:number,
    posX:number,
    posY:number
}
