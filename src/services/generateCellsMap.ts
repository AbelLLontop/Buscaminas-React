import { ICell, STATUS_CELL, STATUS_MINE } from "../interfaces/game/ICell";

export type CellMap = Map<string, ICell>;

const getPosVecinos = (x: number, y: number): Array<[number, number]> => {
  let vecinos: Array<[number, number]> = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];
  return vecinos;
};

const generateCellsEmpty = (rows: number, cols: number): CellMap => {
  const cellsMap: CellMap = new Map();
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      cellsMap.set(`${x},${y}`, {
        id: `${x},${y}`,
        status: STATUS_CELL.CLOSED,
        mine: STATUS_MINE.INACTIVE,
        content: 0,
        posX: x,
        posY: y,
      });
    }
  }
  return cellsMap;
};

const ignoreCells = (cellsIds: string[], cell: ICell) => {
  const idsvecinosAnMine: string[] = [];
  const { posX, posY } = cell;
  let vecinos = getPosVecinos(posX, posY);
  vecinos.push([posX, posY]);
  for (let [x, y] of vecinos) {
    idsvecinosAnMine.push(`${x},${y}`);
  }
  const newCell = cellsIds.filter(
    (cellId) => !idsvecinosAnMine.includes(cellId)
  );
  return newCell;
};

const generateCellWithMines = (
  cellsEmpty: CellMap,
  mines: number,
  firtPosition: ICell
): CellMap => {
  let listIdCells = [...cellsEmpty.keys()];
  listIdCells = [...ignoreCells(listIdCells, firtPosition)];
  listIdCells.sort(() => Math.random() - 0.5);
  const listIdmines = listIdCells.slice(0, mines);
  listIdmines.forEach((id: string) => {
    const cell: ICell = cellsEmpty.get(id)!!;
    cellsEmpty.set(id, {
      ...cell,
      mine: STATUS_MINE.ACTIVE,
    });
  });
  return cellsEmpty;
};

const getMinesAround = (cellsWithMines: CellMap, cell: ICell): number => {
  let mines = 0;
  let vecinos = getPosVecinos(cell.posX, cell.posY);
  for (let [x, y] of vecinos) {
    const id = `${x},${y}`;
    if (cellsWithMines.has(id)) {
      const cellFound = cellsWithMines.get(id)!!;
      if (cellFound.mine === STATUS_MINE.ACTIVE) {
        mines++;
      }
    }
  }
  return mines;
};

const assignNumbersToCells = (cellsWithMines: CellMap) => {
  for (let [key, cell] of cellsWithMines) {
    if (cell.mine === STATUS_MINE.INACTIVE) {
      cellsWithMines.set(key, {
        ...cell,
        content: getMinesAround(cellsWithMines, cell),
      });
    }
  }
  return cellsWithMines;
};

export const generateCellWithMinesAndNumbers = (
  emptyCells: CellMap,
  mines: number,
  firtPosition: ICell
) => {
  const cellsWithMines = generateCellWithMines(emptyCells, mines, firtPosition);
  const cellsWithNumbers = assignNumbersToCells(cellsWithMines);
  return cellsWithNumbers;
};

export const generateCells = (rows: number, cols: number): CellMap => {
  const cellsEmpty = generateCellsEmpty(rows, cols);
  return cellsEmpty;
};

export const explotar = (cells: CellMap, currentCell: ICell) => {
  const listVecinos = getPosVecinos(currentCell.posX, currentCell.posY);
  cells.set(currentCell.id, {
    ...currentCell,
    status: STATUS_CELL.OPEN,
  });
  if(currentCell.content === 0){
    for (let [x, y] of listVecinos) {
      const id = `${x},${y}`;
  
      if (cells.has(id)) {
        const cell = cells.get(id)!!;
        if (cell.status === STATUS_CELL.CLOSED) {
          if (cell.content == 0 && cell.mine === STATUS_MINE.INACTIVE) {
            explotar(cells, cell);
          } else {
            if (cell.mine === STATUS_MINE.INACTIVE) {
              cells.set(id, {
                ...cell,
                status: STATUS_CELL.OPEN,
              });
            }
          }
        }
      }
    }
  }
  
};

export const validateWin = (cells: CellMap,numMines:number) => {
  const cellsOpen = [...cells.values()].filter(
    (cell) => cell.status === STATUS_CELL.OPEN
  );
  return cellsOpen.length === cells.size-numMines;
}
