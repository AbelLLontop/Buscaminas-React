export type Nivel = {
    rows:number;
    columns:number;
    mines:number;
    size:number;
}
export interface INivels{
    normal:Nivel;
    intermedio:Nivel;
    avanzado:Nivel;
}

export const nivels:INivels = {
  normal :{
    rows: 9, 
    columns: 9,
    mines: 1,
    size:3,
    
  },
  intermedio:{
    rows: 16,
    columns: 16,
    mines: 40,
    size:2,
  },
  avanzado:{
    rows: 16,
    columns: 30,
    mines: 99,
    size:1.8,
  }
};
