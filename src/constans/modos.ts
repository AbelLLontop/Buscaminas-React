export type Modo = {
  titulo: string;
  clase: string;
  mensajeWin: string;
  normal: {};
  open: {};
  empty: {};
  check:{};
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
    titulo: "Modo Pingui!🐧",
    clase: "nodoFrozen",
    mensajeWin: "Hallazte todos los peces 🐟 antes que los tiburones 🦈",
    normal: {
      background: "#88edf6",
      boxShadow: "0px 0px 3px 1px rgb(82 228 229)",
    },
    check:{
      background: "rgb(27 27 27)",
      boxShadow: "rgb(17 127 128) 0px 0px 3px 1px",
    },
    open: { background: "rgb(27, 27, 27)", color: "white" },
    empty: { background: "rgb(52, 55, 55)" },
    icon: {
      mine: "🦈",
      flag: "🐧",
      mineDesactivated: "🐟",
    },
  },
  polar: {
    titulo: "Modo Polar!🐼",
    clase: "nodoFrozen",
    mensajeWin: "Hallazte todos los peces 🐟 antes que los tiburones 🦈",
    normal: {
      background: "rgb(255 255 255)",
      boxShadow: "rgb(255 255 255) 0px 0px 3px 1px",
    },
    open: { background: "rgb(13 56 51)", color: "#ffffff" },
    check:{
      background: "#0d3833",
    boxShadow: "1px 1px 1px 4px #a8a8a8",
    },

    empty: { background: "rgb(101 118 118)" },
    icon: {
      mine: "🦈",
      flag: "🐼",
      mineDesactivated: "🐟",
    },
  },
  panal: {
    titulo: "Modo Panal🐝",
    clase: "nodoPanal",
    mensajeWin:
      "Conseguiste todos los frascos de Miel 🍯 antes que los osos 🐻",
      check:{
        background: "#1b1b1b",
      boxShadow: "1px 1px 1px 4px #a97107",
      border: "solid 1px rgb(32, 32, 32)",
      },

    normal: {
      background: "orange",
      boxShadow: "1px 1px 1px 4px orange",
      border: "solid 1px #202020",
    },
    open: { background: "rgb(27, 27, 27)", color: "orange" },
    empty: { background: "rgb(52, 55, 55)" },
    icon: {
      mine: "🐻",
      flag: "🐝",
      mineDesactivated: "🍯",
    },
  },
  toxico: {
    titulo: "Modo Toxic!☢",
    clase: "nodoToxico",
    mensajeWin: "Salvaste nuestras vidas ⛨☢ Gracias ⛑, ",
    check:{
      background: "rgb(52 55 55)",
      boxShadow: "rgb(233 243 74) 0px 0px 15px 1px",
      color:"white"
    },

    normal: {
      background: "#12ff00",
      boxShadow: " 0px 0px 15px 1px rgb(8 255 52)",
    },
    open: { background: "rgb(27, 27, 27)", color: "white" },
    empty: { background: "rgb(52, 55, 55)" },
    icon: {
      mine: "⛨",
      flag: "⛑",
      mineDesactivated: "☢",
    },
  },
};
