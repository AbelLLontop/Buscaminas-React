export type Nivel = {
    rows:number;
    columns:number;
    mines:number;
}
export interface INivels{
    normal:Nivel;
}

export const nivels:INivels = {
  normal :{
    rows: 9,
    columns: 9,
    mines: 10,
  },
};
