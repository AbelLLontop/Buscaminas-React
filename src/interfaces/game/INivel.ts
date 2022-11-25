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
