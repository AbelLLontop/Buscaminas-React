export type Mode = {
    titulo: string;
    clase: string;
    mensajeWin: string;
    normal: {};
    open: {};
    empty: {};
    icon: {
      mine: string;
      flag: string;
      mineDesactivated: string;
    };
  };
  interface IModes {
    frozen: Mode;
    panal: Mode;
    toxico: Mode;
    polar: Mode;
  }
  