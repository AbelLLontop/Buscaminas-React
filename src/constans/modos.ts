export type Modo = {
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
interface IModos {
  frozen: Modo;
  panal: Modo;
  toxico: Modo;
  polar: Modo;
}

export const modos: IModos = {
  frozen: {
    titulo: "Modo Pingui!π§",
    clase: "nodoFrozen",
    mensajeWin: "Hallazte todos los peces π antes que los tiburones π¦",
    normal: {
      background: "#88edf6",
      boxShadow: "0px 0px 3px 1px rgb(82 228 229)",
    },
    open: { background: "rgb(27, 27, 27)", color: "white" },
    empty: { background: "rgb(52, 55, 55)" },
    icon: {
      mine: "π¦",
      flag: "π§",
      mineDesactivated: "π",
    },
  },
  polar: {
    titulo: "Modo Polar!πΌ",
    clase: "nodoFrozen",
    mensajeWin: "Hallazte todos los peces π antes que los tiburones π¦",
    normal: {
      background: "rgb(255 255 255)",
      boxShadow: "rgb(255 255 255) 0px 0px 3px 1px",
    },
    open: { background: "rgb(13 56 51)", color: "#ffffff" },
    empty: { background: "rgb(101 118 118)" },
    icon: {
      mine: "π¦",
      flag: "πΌ",
      mineDesactivated: "π",
    },
  },
  panal: {
    titulo: "Modo Panalπ",
    clase: "nodoPanal",
    mensajeWin:
      "Conseguiste todos los frascos de Miel π― antes que los osos π»",
    normal: {
      background: "orange",
      boxShadow: "1px 1px 1px 4px orange",
      border: "solid 1px #202020",
    },
    open: { background: "rgb(27, 27, 27)", color: "orange" },
    empty: { background: "rgb(52, 55, 55)" },
    icon: {
      mine: "π»",
      flag: "π",
      mineDesactivated: "π―",
    },
  },
  toxico: {
    titulo: "Modo Toxic!β’",
    clase: "nodoToxico",
    mensajeWin: "Salvaste nuestras vidas β¨β’ Gracias β, ",
    normal: {
      background: "#12ff00",
      boxShadow: " 0px 0px 15px 1px rgb(8 255 52)",
    },
    open: { background: "rgb(27, 27, 27)", color: "white" },
    empty: { background: "rgb(52, 55, 55)" },
    icon: {
      mine: "β¨",
      flag: "β’",
      mineDesactivated: "β",
    },
  },
};
